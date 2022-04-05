/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../../Dashboard/assets/images/logo-shopify.svg";
import ava2 from "../../Dashboard/assets/images/logo-atlassian.svg";
import ava3 from "../../Dashboard/assets/images/logo-slack.svg";
import ava5 from "../../Dashboard/assets/images/logo-jira.svg";
import ava6 from "../../Dashboard/assets/images/logo-invision.svg";
import face from "../../Dashboard/assets/images/face-1.jpg";
import face2 from "../../Dashboard/assets/images/face-2.jpg";
import face3 from "../../Dashboard/assets/images/face-3.jpg";
import face4 from "../../Dashboard/assets/images/face-4.jpg";
import face5 from "../../Dashboard/assets/images/face-5.jpeg";
import face6 from "../../Dashboard/assets/images/face-6.jpeg";
import pencil from "../../Dashboard/assets/images/pencil.svg";
/*************************** */
import jwt_decode from "jwt-decode";

/*************************** */

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "DOCTOR",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "SPECIALITY",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "STARTED",
    key: "employed",
    dataIndex: "employed",
  },
];

/**************************************************************** */
var token = localStorage.getItem("user_info");
var decoded = jwt_decode(token);

/*************************************************************** */

function ListDoctors() {
  /****************************************** */
  const [data, setData] = useState([]);

  const getDoctorList = async () => {
    const url = "http://127.0.0.1:3002/doctor/";
    const reponse = await fetch(url);
    const doctorL = await reponse.json();
    //setDoctorList(doctorL);
    const d = [];
    for (var i = 0; i < doctorL.length; i++) {
      d.push({
        key: `${i}`,
        name: (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={40}
                src={face2}
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}>
                  {doctorL[i].FirstName} {doctorL[i].LastName}{" "}
                </Title>
                <p>{doctorL[i].Email}</p>
              </div>
            </Avatar.Group>{" "}
          </>
        ),
        function: (
          <>
            <div className="author-info">
              <Title level={5}>Doctor</Title>
              <p></p>
            </div>
          </>
        ),

        status: (
          <>
            <Button type="primary" className="tag-primary">
              ONLINE
            </Button>
          </>
        ),
        employed: (
          <>
            <div className="ant-employed">
              <span>23/04/18</span>
              <a href="#pablo">Edit</a>
            </div>
          </>
        ),
      });
    }
    setData(d);
  };
  useEffect(() => {
    getDoctorList();
  }, []);

  /****************************************** */

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Doctors List"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ListDoctors;
