import React, {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
// reactstrap components
import {Button,NavItem,NavLink,Nav,TabContent,TabPane,Container,Row,Col,UncontrolledTooltip,
    CardHeader, CardBody, Card} from "reactstrap";

import {Descriptions} from "antd";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import styled from "styled-components";

function Profile() {
    let pageHeader = React.createRef();
    const [pills, setPills] = React.useState("2");
    const [User,SetUser] = useState([]);
    const [iconPills, setIconPills] = React.useState("1");
    const url = "http://localhost:3002/users/"

    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    const token = localStorage.getItem("user_info");
    var decodedTOKEN = jwt_decode(token,{payload : true})
    console.log(decodedTOKEN.user_id);

    const getUser = async () => {
        const response = await fetch(url+decodedTOKEN.user_id);
        const user = await response.json();
        SetUser(user);
        console.log("hneee");
    }
    useEffect(()=>{
        getUser()
    },[])




    return (
        <>

            <div className="wrapper">
                <IndexNavbar />
                <>
                    <div
                        className="page-header clear-filter page-header-small"
                        filter-color="blue"
                    >
                        <div
                            className="page-header-image"
                            style={{
                                backgroundImage:
                                    "url(" + require("assets/img/bg5.jpg").default + ")",
                            }}
                            ref={pageHeader}
                        ></div>
                        <Container>
                            <div className="photo-container">
                                <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
                            </div>
                            <h3 className="title" style={{color: "white",fontFamily: "helvetica"}}>
                                {User.FirstName} {User.LastName}
                            </h3>
                        </Container>
                    </div>
                </>
                <div className="section">
                    <Container>
                        <div className="button-container">
                            <Button className="btn-round" color="info" size="lg">
                                Follow
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip515203352"
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip515203352">
                                Follow me on Twitter
                            </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip340339231"
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip340339231">
                                Follow me on Instagram
                            </UncontrolledTooltip>
                        </div>


                        <h3 className="title">About me</h3>
                        <h5 className="description">
                            A Doctor of considerable range, Ryan — the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                            and records all of his own music, giving it a warm, intimate feel
                            with a solid groove structure. An artist of considerable range.
                        </h5>
                        <Row>
                            {/*this card is for general and medical info */}
                            <Card className="col col-md-8" style={{margin : "10px"}} >
                                <CardHeader>
                                    <Row>
                                        <h3>General Information :</h3>
                                        <Button className="btn-round" style={{marginLeft:"auto", height:"50px" }} color="info" outline type="button">update</Button>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Descriptions title="Basic">
                                        <Descriptions.Item label="Full Name" span={3}>
                                            {User.FirstName+" "+User.LastName}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Sex" span={3}>
                                            {User.Sex}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Birth Date" span={3}>
                                            {User.BirthDate}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Email" span={3}>
                                            {User.Email}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Address" span={3}>
                                            {User.Address}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Phone" span={3}>
                                            {User.Phone}
                                        </Descriptions.Item>
                                    </Descriptions>
                                    <br/>
                                    <Descriptions title="Medical">
                                        <Descriptions.Item label="height" span={3}>
                                            {User.height}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="weight" span={3}>
                                            {User.weight}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="IMC" span={3}>
                                            {User.IMC}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Blood Type" span={3}>
                                            {User.BloodType}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </CardBody>
                            </Card>
                            {/*this card is for appointments list*/}
                            <Card className="col col-md-3" style={{margin : "10px"}} >
                                <CardHeader>
                                    <Row>
                                        <h3>Appointments :</h3>
                                        <Button className="btn-round" style={{marginLeft:"auto", height:"50px" }} color="info" outline type="button">add</Button>
                                    </Row>
                                </CardHeader>
                            </Card>
                        </Row>
                        {/*medical file section*/}
                        <div>
                            here goes medical file section
                            <Row>
                                <Button className="btn-round" color="info" outline type="button">Upload</Button>
                                <Button className="btn-round" color="info" outline type="button">View</Button>
                                <Button className="btn-round" color="info" outline type="button">Download</Button>
                            </Row>
                        </div>
                        {/*history section*/}
                        <div>
                            <Row>
                                here goes history section
                                <Card className="col col-md-12" style={{margin : "10px"}} >
                                    <Descriptions title="History">
                                        <Descriptions.Item label="Full Name" span={3}>
                                            {User.FirstName+" "+User.LastName}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </Card>
                            </Row>
                        </div>
                    </Container>
                </div>
                <DarkFooter />
            </div>
        </>
    );
}

export default Profile;

const GeneralInfoFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const GeneralInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: start`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

