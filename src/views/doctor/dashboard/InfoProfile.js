import { useState } from "react";
import React from "react";
import { Button, Card, Col, Descriptions } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import {
  CardBody,
  CardFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import Row from "antd/es/descriptions/Row";
import axios from "axios";

function InfoProfile(props) {
  const [Update, SetUpdate] = useState(false);
  const changeCard = () => {
    SetUpdate((Update) => !Update);
  };

  const [show, setShow] = React.useState(false);
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
  const handleOpen = () => setShow(true);
  const onChangeCard = () => {
    SetUpdate((Update) => !Update);
  };

  //form to be edited and submitted
  const [formData, setFormData] = useState({
    id: props.info.user._id,
    Picture: props.info.user.Picture,
    FirstName: props.info.user.FirstName,
    LastName: props.info.user.LastName,
    Password: props.info.user.Password,
    Role: props.info.user.Role,
    Sex: props.info.user.Sex,
    BirthDate: props.info.user.BirthDate,
    Email: props.info.user.Email,
    Address: props.info.user.Address,
    Phone: props.info.user.Phone,
    Speciality: props.info.doctor.Speciality,
    OfficeAddress: props.info.doctor.OfficeAddress,
    ProfessionalCardNumber: props.info.doctor.ProfessionalCardNumber,
    Insurance: props.info.doctor.Insurance,
    LaborTime: props.info.doctor.LaborTime,
    Description: props.info.doctor.Description,
    Started: props.info.doctor.Started,
    Patients: props.info.doctor.Patients,
    Status: props.info.doctor.Status,
    Appointments: props.info.doctor.Appointments,
    officeMap: props.info.doctor.officeMap,
  });
  const {
    id,
    Picture,
    FirstName,
    LastName,
    Password,
    Role,
    Sex,
    BirthDate,
    Email,
    Address,
    Phone,
    Speciality,
    OfficeAddress,
    ProfessionalCardNumber,
    Insurance,
    LaborTime,
    Description,
    Started,
    Patients,
    Status,
    Appointments,
    officeMap,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  async function EditDoctor() {
    console.log(formData);
    await fetch("http://127.0.0.1:3002/users/updateUser/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return Update ? (
    <Card
      bordered={false}
      title={<h6 className="font-semibold m-0">Edit Profile</h6>}
      className="header-solid h-full card-profile-information"
      extra={
        <Button type="link" onClick={onChangeCard}>
          {pencil}
        </Button>
      }
      bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
    >
      <CardBody>
        <form>
          <Descriptions>
            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  defaultValue={FirstName}
                  type="text"
                  name="FirstName"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons text_caps-small"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  defaultValue={LastName}
                  type="text"
                  onChange={(e) => onChange(e)}
                  name="LastName"
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  defaultValue={Email}
                  type="email"
                  onChange={(e) => onChange(e)}
                  name="Email"
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons location_pin"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  defaultValue={Address}
                  type="text"
                  name="Address"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons tech_mobile"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  defaultValue={Phone}
                  type="number"
                  onChange={(e) => onChange(e)}
                  name="Phone"
                ></Input>
              </InputGroup>
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={Speciality}
                  type="text"
                  name="Speciality"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={OfficeAddress}
                  type="text"
                  name="OfficeAddress"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={ProfessionalCardNumber}
                  type="number"
                  name="ProfessionalCardNumber"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={Insurance}
                  type="text"
                  name="Insurance"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={LaborTime}
                  type="text"
                  name="LaborTime"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={Description}
                  type="text"
                  name="Description"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>

            <Descriptions.Item label="" span={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  defaultValue={Started}
                  type="text"
                  name="Started"
                  onChange={(e) => onChange(e)}
                ></Input>
              </InputGroup>
            </Descriptions.Item>
          </Descriptions>
        </form>
      </CardBody>
      <CardFooter className="text-center">
        <Button
          className="btn-neutral btn-round"
          color="info"
          type="submit"
          onClick={EditDoctor}
          size="lg"
        >
          Update
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Card
      bordered={false}
      title={<h6 className="font-semibold m-0">Profile Information</h6>}
      className="header-solid h-full card-profile-information"
      extra={
        <Button type="link" onClick={onChangeCard}>
          {pencil}
        </Button>
      }
      bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
    >
      <p className="text-dark">
        {props.info.doctor.Description.slice(0, 175)}
        {props.info.doctor.Description.length > 180 && <>...</>}
      </p>
      <hr className="my-25" />
      <Descriptions title="Personal Details">
        <Descriptions.Item label="Full Name" span={3}>
          {props.info.user.FirstName} {props.info.user.LastName}
        </Descriptions.Item>
        <Descriptions.Item label="Mobile" span={3}>
          (+216) {props.info.user.Phone}
        </Descriptions.Item>
        <Descriptions.Item label="Email" span={3}>
          {props.info.user.Email}
        </Descriptions.Item>
        <Descriptions.Item label="Office address" span={3}>
          {props.info.doctor.OfficeAddress}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
export default InfoProfile;
