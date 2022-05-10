import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardBody, CardHeader, Input, Row} from "reactstrap";
import {useNavigate, useParams} from "react-router-dom";
import {Descriptions} from "antd";
import DatePicker from "react-datepicker";
import moment from "moment";

function CompleteProfile() {
    const navigate = useNavigate ()
    let [ConfirmPassword,setConfirmPassword]= useState(null);
    const getFormattedDate = (dateStr) => {
        return moment(dateStr).toDate();
    }
    const [user,setUser] = useState({
        FirstName: null,
        LastName: null,
        Sex: null,
        Email: null,
        //not clear yet
        Password: null,
        Role : null,
        BirthDate: null,
        Address: null,
        Phone: null,
        //if a patient
        height: null,
        weight: null,
        BloodType: 'unknown',
        //if a doctor
        Speciality: null,
        OfficeAddress: null,
        ProfessionalCardNumber: null,
        //if an assistant
        Description: null,
        ActsAndCare: null
    })
    const id = useParams();
    const {FirstName,LastName,Sex,Email,Role,BirthDate,Address,Password,
        Phone,height,weight,BloodType,Speciality,OfficeAddress,
        ProfessionalCardNumber,Description,ActsAndCare} = user;
    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const setDate =(e)=>{
        user.BirthDate= e;
    }

    async function getUser(){
        console.log(id.userId);
        axios({
            method: "GET",
            url: process.env.REACT_APP_BackEnd_url+"/users/getById/" + id.userId,
        }).then(async response => {
            console.log(response.data);
            setUser(response.data);
        })
    }
    useEffect(() => {
        getUser()
    },[])

    //api function

    async function completeP(){
        console.log(user);
        if(Role === "unknown"){
            console.log("user must have a role")
        } else {
            if (Password === ConfirmPassword)
            {
                axios({
                    method: "Post",
                    url: process.env.REACT_APP_BackEnd_url+"/users/completeProfile/" + id.userId,
                    data: user
                }).then(response => {
                    console.log(response);
                })
            } else {
                console.log("password and confirm password dont match")
            }
        }
    }

    // this is for when the user chooses a role
    let otherInfo;
    if (Role === "Patient"){
        otherInfo= <div className="row mt-2">
            <div className="col-md-6">
                <a>height :</a>
                <Input type="number" name="height" placeholder="height" defaultValue={height} onChange={(e) => onChange(e)}></Input>
            </div>
            <div className="col-md-6">
                <a>weight :</a>
                <Input type="number" name="weight" placeholder="weight" defaultValue={weight} onChange={(e) => onChange(e)}></Input>
            </div>

            <div className="col-md-6">
                <a>Blood Type :</a>
                <Input type="select"
                       value={BloodType}
                       name="BloodType"
                       onChange={(e) => onChange(e)}
                >
                    <option value="unknown" style={{color : "black"}} >unknown</option>
                    <option value="A+" style={{color : "black"}} >A+</option>
                    <option value="A-" style={{color : "black"}}>A-</option>
                    <option value="B+" style={{color : "black"}}>B+</option>
                    <option value="B-" style={{color : "black"}}>B-</option>
                    <option value="AB+" style={{color : "black"}}>AB+</option>
                    <option value="AB-" style={{color : "black"}}>AB-</option>
                    <option value="O+" style={{color : "black"}}>O+</option>
                    <option value="O-" style={{color : "black"}}>O-</option>
                </Input>
            </div>
        </div>
    } else if (Role === "Doctor"){
        otherInfo= <div className="row mt-2">
            <div className="col-md-6">
                <a>Speciality :</a>
                <Input type="text" name="Speciality" placeholder="Speciality" defaultValue={Speciality} onChange={(e) => onChange(e)}></Input>
            </div>
            <div className="col-md-12">
                <a>Office Address :</a>
                <Input type="text" name="OfficeAddress" placeholder="OfficeAddress" defaultValue={OfficeAddress} onChange={(e) => onChange(e)}></Input>
            </div>
            <div className="col-md-12">
                <a>Professional Card Number :</a>
                <Input type="number" name="ProfessionalCardNumber" placeholder="ProfessionalCardNumber" defaultValue={ProfessionalCardNumber} onChange={(e) => onChange(e)}></Input>
            </div>
        </div>
    } else if (Role === "Assistant"){
        otherInfo= <div className="row mt-2">
            <div className="col-md-6">
                <a>Speciality :</a>
                <Input type="text" name="Speciality" placeholder="Speciality" defaultValue={Speciality} onChange={(e) => onChange(e)}></Input>
            </div>
            <div className="col-md-12">
                <a>Description</a>
                <Input type="text" name="Description" placeholder="Description" defaultValue={Description} onChange={(e) => onChange(e)}></Input>
            </div>
        </div>
    }

    if( user === null )
    {
        return (
            <p>loading data...</p>
        );
    }
    return(
        <>
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img
                            className="rounded-circle mt-5"
                            width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        ></img>
                        <span className="font-weight-bold">{FirstName}</span>
                        <span className="text-black-50">{Email}</span>
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <a>First Name :</a>
                                <Input type="text" placeholder="first name" name="FirstName" defaultValue={FirstName} onChange={(e) => onChange(e)}></Input>
                            </div>
                            <div className="col-md-6">
                                <a>Last Name :</a>
                                <Input type="text" name="LastName" defaultValue={LastName} placeholder="Last name" onChange={(e) => onChange(e)}></Input>
                            </div>
                            <div className="col-md-6">
                                <a>Role : </a>
                                <Input type="select"
                                       value={Role}
                                       name="Role"
                                       onChange={(e) => onChange(e)}
                                >
                                    <option value="Patient" style={{color : "black"}} >Patient</option>
                                    <option value="Doctor" style={{color : "black"}}>Doctor</option>
                                    <option value="Assistant" style={{color : "black"}}>Assistant</option>
                                    <option value="unknown" style={{color : "black"}} >unknown</option>
                                </Input>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <a>Password :</a>
                                <Input type="password" name="Password" placeholder="Password" defaultValue={Password} onChange={(e) => onChange(e)}></Input>
                            </div>
                            <div className="col-md-12">
                                <a>Confirm Password :</a>
                                <Input type="password" name="ConfirmPassword" placeholder="ConfirmPassword" defaultValue={ConfirmPassword}
                                       onChange={(e)=>setConfirmPassword(e.target.value)}> </Input>
                            </div>

                            <div className="col-md-6">
                                <a>Birthdate :</a>
                                <DatePicker
                                    className="form-control"
                                    selected={BirthDate}
                                    onChange={(e) => {
                                        const d = new Date(e);
                                        console.log(d);
                                        setDate(d);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <a>Sex : </a>
                                <Input type="select"
                                       value={Sex}
                                       name="Sex"
                                       onChange={(e) => onChange(e)}
                                >
                                    <option value="male" style={{color : "black"}} >male</option>
                                    <option value="female" style={{color : "black"}}>female</option>
                                    <option value="unknown" style={{color : "black"}} >unknown</option>
                                </Input>
                            </div>
                            <div className="col-md-6">
                                <a>Phone :</a>
                                <Input type="number" name="Phone" placeholder="Phone" defaultValue={Phone} onChange={(e) => onChange(e)}></Input>
                            </div>
                            <div className="col-md-12">
                                <a>Email :</a>
                                <Input type="text" name="Email" placeholder="email" defaultValue={Email} onChange={(e) => onChange(e)}></Input>
                            </div>

                            <div className="col-md-12">
                                <a>Address :</a>
                                <Input type="text" name="Address" placeholder="Address" defaultValue={Address} onChange={(e) => onChange(e)}></Input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        {otherInfo}
                    </div>
                    <div className="mt-5 text-center">
                        <Button className="btn-round" color="info" outline type="button" onClick={completeP}>Save Profile</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default CompleteProfile;
