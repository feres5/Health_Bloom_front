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
import {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import axios from "axios";
import Info from "./Info"
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

import BgProfile from "../../assets/images/bg-profile.jpg";
import profilavatar from "../../assets/images/face-1.jpg";
import convesionImg from "../../assets/images/face-3.jpg";
import convesionImg2 from "../../assets/images/face-4.jpg";
import convesionImg3 from "../../assets/images/face-5.jpeg";
import convesionImg4 from "../../assets/images/face-6.jpeg";
import convesionImg5 from "../../assets/images/face-2.jpg";
import project1 from "../../assets/images/home-decor-1.jpeg";
import project2 from "../../assets/images/home-decor-2.jpeg";
import project3 from "../../assets/images/home-decor-3.jpeg";
import jwt_decode from "jwt-decode";
import {Box} from "@mui/material";

function AssistantProfile() {


  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  const [data,setData] = useState(null);
  const [user, setuser] = useState(null)
  const[Assistant,setAssistant]= useState(null)

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };


  const url = process.env.REACT_APP_BackEnd_url+"/articles/Author/"

  var usertoken = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(usertoken,{payload : true});

  

  // const fetchuser = async () => {
  //   const urluser = url + decodedTOKEN.user_id
  //
  //   const reponse = await fetch(urluser)
  //   const newuser = await reponse.json()
  //   setuser(newuser)
  //   console.log("==========>"+newuser._assistant)
  //   localStorage.setItem('idAssistant', newuser._assistant);
  //
  //
  //   return newuser;
  // }

  const fetchData = async ()=>{
    await axios.get(process.env.REACT_APP_BackEnd_url+'/users/getById/'+decodedTOKEN.user_id)
        .then(result=>{
          //console.log(result.data);
          setData(result.data);
          setuser(result.data.user)
          setAssistant(result.data.assistant);
          //console.log(data);
          //console.log("hello assistant"+Assistant.Speciality);
        })
        .catch(err=>{
          console.log(err);
        })
  }

  useEffect(() => {
    fetchData();
    //fetchuser();
    //fetchAssistant();
  }, [])




  // const fetchAssistant = async () => {
  //   const urlA = process.env.REACT_APP_BackEnd_url+"/users/getassistants/"
  //   const idA= localStorage.getItem("idAssistant")
  //
  //   const urlAssistant = urlA +idA
  //   console.log("=======>"+urlAssistant)
  //   const reponse = await fetch(urlAssistant)
  //   const newAssistant = await reponse.json();
  //   console.log(newAssistant)
  //   setAssistant(newAssistant)
  //
  //
  //   return newAssistant;
  // }

  const EditAssistant = async (id) => {
    console.log("here" +  id);
    const urlAssistant = process.env.REACT_APP_BackEnd_url+"/users/editassistant/"


    const urlA = urlAssistant + id
    console.log("uel"+urlA);

    const reponse = await fetch(urlA)
    const newAssistant = await reponse.json()
    setAssistant(newAssistant)
    console.log("hello "+Assistant);



    return newAssistant;
  }




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

  const project = [
    {
      img: project1,
      titlesub: "flen ben foulen",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "flen ben falten",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "foul ben falten",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const [show, setShow] = React.useState(false);

  if(data ===null || user=== null || Assistant==null){
    return (
        <p>loading data...</p>
    );
  }
  return (

    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 " controlId="firstNamefield">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                  value={user.FirstName}
                  type="text"
                  name="firstNamefield"
                  placeholder="First Name"
                  autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="lastNamefield">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                  type="text"
                  name="lastNamefield"
                  placeholder="Last Name"
                  autoFocus
                  value={user.LastName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneField">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                  type="number"
                  placeholder="Phone"
                  name="phoneField"
                  autoFocus
                  value={user.Phone}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailField">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                  name="emailField"
                  type="email"
                  placeholder="name@example.com"
                  value={user.Email}
                  autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="specialityField">
              <Form.Label>Speciality</Form.Label>
              <Form.Control
                  name="specialityField"
                  type="text"
                  placeholder="Speciality"
                  autoFocus
                  value={Assistant.Speciality}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptionFiled">
              <Form.Label>Description</Form.Label>
              <Form.Control
                  autoFocus
                  name="descriptionFiled"
                  as="textarea"
                  rows={4}
                  value={Assistant.Description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
                  <h4 className="font-semibold m-0"> Dr {user.FirstName} {user.LastName}</h4>
                  <p>
                    {Assistant.Speciality}  </p>
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
                <Radio.Button value="a">COLLEGUE</Radio.Button>
                <Radio.Button value="b">AGENDA</Radio.Button>
                <Radio.Button value="c">PATIENTS</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24 ">
          <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">APPOINTEMENTS</h6>}
              className="header-solid h-full"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >

          </Card>
        </Col>
        <Col span={24} md={16} className="mb-24">
          <Info info={data} ></Info>
        </Col>
        <Col span={24} md={8} className="mb-24">


        </Col>
      </Row>
      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">Patients</h6>
            <p>Patients DataBase</p>
          </>
        }
      >
        <Row gutter={[24, 24]}>
          {project.map((p, index) => (
            <Col span={24} md={12} xl={6} key={index}>
              <Card
                bordered={false}
                className="card-project"
                cover={<img alt="example" src={p.img} />}
              >
                <div className="card-tag">{p.titlesub}</div>
                <h5>{p.titile}</h5>
                <p>{p.disciption}</p>
                <Row gutter={[6, 0]} className="card-footer">
                  <Col span={12}>
                    <Button type="button">VIEW PROFILE</Button>
                  </Col>
                  <Col span={12} className="text-right">
                    <Avatar.Group className="avatar-chips">
                      <Avatar size="small" src={profilavatar} />
                      <Avatar size="small" src={convesionImg} />
                      <Avatar size="small" src={convesionImg2} />
                      <Avatar size="small" src={convesionImg3} />
                    </Avatar.Group>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col span={24} md={12} xl={6}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader projects-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageURL ? (
                <img src={imageURL} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default AssistantProfile;
