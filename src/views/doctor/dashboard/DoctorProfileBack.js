import { useState } from "react";
import jwt_decode from "jwt-decode";
import React from "react";
import InfoProfile from "./InfoProfile";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import Echart from "./charts/EChart";
import LineChart from "./charts/LineChart";

import {
  Row,
  Col,
  Card,
  Button,
  Descriptions,
  Avatar,
  Radio,
  List,
  Typography,
} from "antd";
import convesionImg from "../../../Dashboard/assets/images/face-3.jpg";

import BgProfile from "../../../Dashboard/assets/images/bg-profile.jpg";
import profilavatar from "../../../Dashboard/assets/images/face-1.jpg";

import calandarImg from "../../../Dashboard/assets/images/calandar.jpg";
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
function DoctorProfileBack() {
  /*--------------------------------------------------stats */
  const { Title, Text } = Typography;
  const dollor = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
        fill="#fff"
      ></path>
      <path
        d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const profile = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="#fff"
      ></path>
      <path
        d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
        fill="#fff"
      ></path>
      <path
        d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z"
        fill="#fff"
      ></path>
      <path
        d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const heart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const cart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const [count, setCount] = React.useState([]);

  /*----------------------------------------------------------------- */

  const navigate = useNavigate();

  const [doctorInfo, setdoctorInfo] = React.useState({});
  const [userInfo, setUserInfo] = React.useState({});
  const [pateints, setPatients] = React.useState([]);

  var token = localStorage.getItem("user_info");
  var decodedTOKEN = null;

  const getPatients = async () => {
    const reponse = await fetch(
      `http://127.0.0.1:3002/doctor/getDoctorPatients/${decodedTOKEN.restUserInfo}`
    );
    const infoRes = await reponse.json();
    const data = [];
    infoRes.map((item) => {
      data.push({
        title: item.FirstName + " " + item.LastName,
        avatar: convesionImg,
        description: "Hi! I need more information…",
      });
    });

    setPatients(data);
  };
  const getStats = async () => {
    /*******************New Patients Section ************************** */
    const reponse = await fetch(
      `http://127.0.0.1:3002/added/${decodedTOKEN.restUserInfo}`
    );
    const infoRes = await reponse.json();
    var currentMonth = new Date().getMonth();
    var prevMonth = currentMonth - 1;
    /*------------------new patients this month------------------------------- */
    const newPatients = infoRes.filter(
      (item) => new Date(item.createdAt).getMonth() === currentMonth
    ).length;
    /*------------------patients prev month------------------------------- */
    const prevPatients = infoRes.filter(
      (item) => new Date(item.createdAt).getMonth() === prevMonth
    ).length;
    /*--------------------------- Progress ----------------------------*/
    var progress = 0;
    var pprogress = 0;

    /*------------------------------------------------------------------ */
    var beforeThisMonth = infoRes.filter(
      (item) => new Date(item.createdAt).getMonth() < currentMonth
    ).length;
    var thisMonth = infoRes.filter(
      (item) => new Date(item.createdAt).getMonth() === currentMonth
    ).length;
    console.log("this month : ", thisMonth);

    if (beforeThisMonth === 0) pprogress = 100;
    else {
      pprogress = beforeThisMonth + thisMonth;
      pprogress = pprogress / beforeThisMonth;
      pprogress = pprogress * 100;
      pprogress = pprogress - 100;
    }
    var bnb2 = "";
    console.log("infoRes : ", infoRes.length);
    console.log("beforeThisMonth : ", beforeThisMonth);

    if (pprogress === 0) {
      bnb2 = "redtext";
    } else {
      bnb2 = "bnb2";
      pprogress = "+" + pprogress;
    }

    /*------------------------------------------------------------------ */

    if (prevPatients === 0) progress = 100;
    else {
      progress = newPatients / prevPatients;
      progress = pprogress * 100;
      progress = pprogress - 100;
    }
    var bnb = "";

    if (progress > 0) {
      progress = "+" + progress;
      bnb = "bnb2";
    } else {
      bnb = "redtext";
    }
    /******************* End new Patients Section ************************** */
    /*******************Appointments Section ******************************* */
    const reponse1 = await fetch(
      `http://127.0.0.1:3002/api/appointments/${decodedTOKEN.restUserInfo}`
    );

    var d = new Date();
    var currentWeek = d.getWeek();

    const infoRes1 = await reponse1.json();
    const thisWeekApp = infoRes1.filter(
      (item) => new Date(item.startDate).getWeek() === currentWeek
    ).length;

    var prevWeek = currentWeek - 1;
    var k = 0;
    var j = 0;

    for (var i = 0; i < infoRes1.length; i++) {
      if (new Date(infoRes1[i].startDate).getWeek() === currentWeek) {
        k++;
      }
      if (new Date(infoRes1[i].startDate).getWeek() === prevWeek) {
        j++;
      }
    }
    var aprogress = 0;
    var bnb3 = "";
    if (j === 0) aprogress = 100;
    else {
      aprogress = k / j;
      aprogress = aprogress * 100;
      aprogress = aprogress - 100;
      if (aprogress < 0) bnb3 = "redtext";
      else {
        aprogress = "+" + aprogress;
        bnb3 = "bnb2";
      }
    }

    /*******************End Appointments Section *************************** */

    setCount([
      {
        today: "Total Patients (progress this month)",
        title: infoRes.length,
        persent: pprogress + "%",
        icon: profile,
        bnb: bnb2,
      },
      {
        today: "New Patients (than last month)",
        title: "+" + newPatients,
        persent: progress + "%",
        icon: heart,
        bnb: bnb,
      },
      {
        today: "Las week Appointments Number ",
        title: j,
        persent: "",
        icon: dollor,
        bnb: "bnb2",
      },
      {
        today: "This Week Appointments Number",
        title: k,
        persent: aprogress.toFixed(2) + "%",
        icon: cart,
        bnb: bnb3,
      },
    ]);
  };

  const getInfo = async () => {
    const reponse = await fetch(
      `http://localhost:3002/users/getById/${decodedTOKEN.user_id}`
    );
    const infoRes = await reponse.json();
    setData(infoRes);
    setdoctorInfo(infoRes.doctor);
    setUserInfo(infoRes.user);
  };

  React.useEffect(() => {
    if (token) {
      decodedTOKEN = jwt_decode(token, { payload: true });
      getPatients();
      getInfo();
      getStats();
    }
  }, []);
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const toCalandar = () => {
    navigate("/calandar");
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const [data, setData] = useState(null);
  if (data === null) {
    return <p>loading data...</p>;
  }
  return (
    <>
      {/* ------------------------------------------------------- */}
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={8} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />
                <div className="avatar-info">
                  <h4 className="font-semibold m-0">
                    {userInfo.FirstName} {userInfo.LastName}{" "}
                  </h4>
                  <p>{doctorInfo.Speciality}</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">TEAMS</Radio.Button>
                <Radio.Button value="c">PROJECTS</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24">
          {/* here */}
          <InfoProfile info={data}></InfoProfile>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Calandar</h6>}
            className="header-solid h-full"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <div className="card bg-dark-primary shadow-none text-center ">
              <div className="card-body py-6">
                <img src={calandarImg} alt="" />
                <div className="mt-4">
                  <Button type="button" onClick={toCalandar}>
                    View Schedule
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Patients</h6>}
            className="header-solid h-full"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={pateints.slice(0, 5)}
              split={false}
              className="conversations-list"
              renderItem={(item) => (
                <List.Item actions={[<Button type="link">View</Button>]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square" size={48} src={item.avatar} />
                    }
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row className="rowgap-vbox" gutter={[24, 0]}>
        {count.map((c, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            className="mb-24"
          >
            <Card bordered={false} className="criclebox ">
              <div className="number">
                <Row align="middle" gutter={[24, 0]}>
                  <Col xs={18}>
                    <span>{c.today}</span>
                    <Title level={3}>
                      {c.title} <small className={c.bnb}>{c.persent}</small>
                    </Title>
                  </Col>
                  <Col xs={6}>
                    <div className="icon-box">{c.icon}</div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Card bordered={false} className="criclebox h-full">
        <LineChart />
      </Card>
    </>
  );
}

export default DoctorProfileBack;
