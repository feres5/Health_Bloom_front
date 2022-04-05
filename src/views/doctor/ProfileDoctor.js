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
import { useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import BgProfile from "../../Dashboard/assets/images/bg-profile.jpg";
import profilavatar from "../../Dashboard/assets/images/face-1.jpg";
import convesionImg from "../../Dashboard/assets/images/face-3.jpg";
import convesionImg2 from "../../Dashboard/assets/images/face-4.jpg";
import convesionImg3 from "../../Dashboard/assets/images/face-5.jpeg";
import convesionImg4 from "../../Dashboard/assets/images/face-6.jpeg";
import convesionImg5 from "../../Dashboard/assets/images/face-2.jpg";
import project1 from "../../Dashboard/assets/images/home-decor-1.jpeg";
import project2 from "../../Dashboard/assets/images/home-decor-2.jpeg";
import project3 from "../../Dashboard/assets/images/home-decor-3.jpeg";
/*************************** */
import jwt_decode from "jwt-decode";
/*************************** */

function ProfileDoctor() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
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
  /**************************************************************** */
  var token = localStorage.getItem("user_info");
  var decoded = jwt_decode(token);

  const [doctor, setDoctor] = useState("");
  /*************************************************************** */
  const getDoctorInfo = async () => {
    const url = `http://127.0.0.1:3002/doctor/${decoded.user_id}`;
    const reponse = await fetch(url);
    const doctor = await reponse.json();
    setDoctor(doctor);
  };
  useEffect(() => {
    getDoctorInfo();
  }, []);

  /*************************************************************** */

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

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">
                    {doctor[0].FirstName} {doctor[0].LastName}{" "}
                  </h4>
                  <p>CEO / Co-Founder</p>
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
        <Col span={24} md={8} className="mb-24 "></Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Profile Information</h6>}
            className="header-solid h-full card-profile-information"
            extra={<Button type="link">{pencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark"> {doctor[1].Description} </p>
            <hr className="my-25" />
            <Descriptions title="Details">
              <Descriptions.Item label="Full Name" span={3}>
                {doctor[0].FirstName} {doctor[0].LastName}
              </Descriptions.Item>
              <Descriptions.Item label="Mobile" span={3}>
                (+216) {doctor[0].Phone}
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                {doctor[0].Email}
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                {doctor[0].Address}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24"></Col>
      </Row>
    </>
  );
}

export default ProfileDoctor;
