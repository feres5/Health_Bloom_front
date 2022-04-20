import React, {useEffect, useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// reactstrap components
import {Button,Container,Row,UncontrolledTooltip, CardHeader, Card,
    Input,InputGroupAddon,InputGroupText,FormGroup} from "reactstrap";

import {Descriptions} from "antd";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import GeneralInfo from "./generalInfo";
//imports for popup
import 'reactjs-popup/dist/index.css';
import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Alert} from "@mui/material";
import {InputGroup} from "react-bootstrap";

function Profile()  {
    const token = localStorage.getItem("user_info");
    var decodedTOKEN = jwt_decode(token,{payload : true});
    let pageHeader = React.createRef();
    const [data,setData]= useState(null);
    const url = "http://localhost:3002/users/"
    React.useEffect( () => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    useEffect( async () => {
        await axios.get(url + "getById/" + decodedTOKEN.user_id)
            .then((response) => {
                setData(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    //for medical file popup
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if(data===null)
    {
        return (
            <p>loading profile data...</p>
        );
    }
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
                                    {data.user.FirstName} {data.user.LastName}
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
                                <GeneralInfo info={data}></GeneralInfo>
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
                                    <Button className="btn-round" color="info" onClick={handleClickOpen} outline type="button">Upload</Button>
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
                                                {data.user.FirstName+" "+data.user.LastName}
                                            </Descriptions.Item>
                                        </Descriptions>
                                    </Card>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <DarkFooter />
                </div>
                <Dialog open={open} onClose={()=>handleClose()}>
                    <DialogTitle>medical file info</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            please fill the fields under in order to provide the medical staff with useful information
                        </DialogContentText>
                        <form>
                            <h6 className="title" style={{ "text-align": "left"}}>surgical :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="title"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="motif"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="outcomes"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "text-align": "left"}}>Obstetric :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="outcomes"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="pregnancy Date"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="child Birth Date"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="baby Gender"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "text-align": "left"}}>Medications :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="name"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="dose"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="from"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="until"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "text-align": "left"}}>Family History :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="family Member"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="disease"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="treatments"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="outcomes"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "text-align": "left"}}>Social History :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="title"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="info"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "text-align": "left"}}>Habits :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="habit"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder="state"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <Row style={{alignContent:"left"}}>
                                <Button className="btn-round" color="info" outline type="button" >upload</Button>
                                <Button className="btn-round" color="danger" outline type="button" onClick={()=>handleClose}>Cancel</Button>
                            </Row>

                        </form>
                    </DialogContent>
                </Dialog>

            </>
        );
}
export default Profile;
