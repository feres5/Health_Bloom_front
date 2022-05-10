import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import React from "react";

Date.prototype.getWeek = function () {
  var target = new Date(this.valueOf());
  var dayNr = (this.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  var firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
};

function LineChart() {
  const { Title, Paragraph } = Typography;
  const [series, setSeries] = React.useState([]);
  const [appointmentProgress, setAppointmentProgress] = React.useState(0);

  var token = localStorage.getItem("user_info");
  var decodedTOKEN = null;
  const getChartData = async () => {
    const reponse = await fetch(
      `http://127.0.0.1:3002/api/appointments/${decodedTOKEN.restUserInfo}`
    );
    const infoRes = await reponse.json();
    /*------------------------------------------------------------ */
    var d = new Date();
    var currentWeek = d.getWeek();
    var prevWeek = currentWeek - 1;
    var k = 0;
    var j = 0;

    for (var i = 0; i < infoRes.length; i++) {
      if (new Date(infoRes[i].startDate).getWeek() === currentWeek) {
        k++;
      }
      if (new Date(infoRes[i].startDate).getWeek() === prevWeek) {
        j++;
      }
    }
    var progress = 0;

    if (j === 0) progress = 100;
    else {
      progress = k / j;
      progress = progress * 100;
      progress = progress - 100;
    }
    setAppointmentProgress(progress);
    /*------------------------------------------------------------ */

    var data = [];
    var currentYear = new Date().getFullYear();

    if (currentYear.toString() === infoRes[0].startDate.slice(0, 4)) {
      for (var i = 0; i < 12; i++) {
        var count = infoRes.filter(
          (item) => new Date(item.startDate).getMonth() === i
        );
        data.push(count.length);
      }
    }

    const reponse1 = await fetch(
      `http://127.0.0.1:3002/added/${decodedTOKEN.restUserInfo}`
    );
    const infoRes1 = await reponse1.json();
    var data1 = [];
    if (currentYear.toString() === infoRes1[0].createdAt.slice(0, 4)) {
      for (var i = 0; i < 12; i++) {
        var count = infoRes1.filter(
          (item) => new Date(item.createdAt).getMonth() === i
        );
        data1.push(count.length);
      }
    }

    setSeries([
      {
        name: "Appointments",
        data: data, //data,
        offsetY: 0,
      },
      {
        name: "Patients",
        data: data1,
        offsetY: 0,
      },
    ]);
  };
  React.useEffect(() => {
    if (token) {
      decodedTOKEN = jwt_decode(token, { payload: true });
      getChartData();
    }
  }, []);

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>New Appointments</Title>
          <Paragraph className="lastweek">
            than last week{" "}
            {appointmentProgress > 0 && (
              <span className="bnb2">+{appointmentProgress}%</span>
            )}
            {appointmentProgress <= 0 && (
              <span className="redtext" style={{ color: "red" }}>
                {appointmentProgress.toFixed(2)}%
              </span>
            )}
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Appointments</li>
            <li>{<MinusOutlined />} New Patients</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
