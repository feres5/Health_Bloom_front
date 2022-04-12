import React, {useState} from "react";
import {Button, Card, CardBody, CardHeader, Input, Row} from "reactstrap";
import {Descriptions} from "antd";
import { Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

function GeneralInfo(props) {
    const navigate = useNavigate()
    // console.log(props.info.user);
    // console.log(props.info.patient);
    const url = "http://localhost:3002/users/";

    const getFormattedDate = (dateStr) => {
        return moment(dateStr).toDate();
    }

     const [formData, setFormData] = useState({
         id : props.info.patient._id,
         FirstName: props.info.user.FirstName,
         LastName: props.info.user.LastName,
         Sex: props.info.user.Sex,
         BirthDate: getFormattedDate(props.info.user.BirthDate),
         Email: props.info.user.Email,
         Address:props.info.user.Address,
         Phone:props.info.user.Phone,
         height : props.info.patient.height,
         weight : props.info.patient.weight,
         BloodType : props.info.patient.BloodType
    });
    const {id,FirstName,LastName,Sex,BirthDate,Email,Address,Phone,height,weight,BloodType} = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    async function updatePatient() {
        console.log(formData);
        let result = await fetch(
            url+"updatePatient/"+id,
            {
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":'application/json'
                },
                body: JSON.stringify(formData)
            }
        )
        result = await result.json();
        console.log(result);
        navigate("/PatientProfile");
    }
    //switching between
    const [Update,SetUpdate]= useState(false);
    const changeCard = () => {
        SetUpdate(Update => !Update);
    }
    if (Update===false){
        return (
            <Card className="col col-md-8" style={{margin : "10px"}} >
                <CardHeader>
                    <Row>
                        <h3>General Information :</h3>
                        <Button className="btn-round" onClick={changeCard} style={{marginLeft:"auto", height:"50px" }} color="info" outline type="button">update</Button>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Descriptions title="Basic">
                        <Descriptions.Item label="Full Name" span={3}>
                            {props.info.user.FirstName+" "+props.info.user.LastName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Sex" span={3}>
                            {props.info.user.Sex}
                        </Descriptions.Item>
                        <Descriptions.Item label="Birth Date" span={3}>
                            {props.info.user.BirthDate}
                        </Descriptions.Item>
                        <Descriptions.Item label="Email" span={3}>
                            {props.info.user.Email}
                        </Descriptions.Item>
                        <Descriptions.Item label="Address" span={3}>
                            {props.info.user.Address}
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone" span={3}>
                            {props.info.user.Phone}
                        </Descriptions.Item>
                    </Descriptions>
                    <br/>
                    <Descriptions title="Medical">
                        <Descriptions.Item label="height" span={3}>
                            {props.info.patient.height}
                        </Descriptions.Item>
                        <Descriptions.Item label="weight" span={3}>
                            {props.info.patient.weight}
                        </Descriptions.Item>
                        <Descriptions.Item label="IMC" span={3}>
                            {props.info.patient.IMC}
                        </Descriptions.Item>
                        <Descriptions.Item label="Blood Type" span={3}>
                            {props.info.patient.BloodType}
                        </Descriptions.Item>
                    </Descriptions>
                </CardBody>
            </Card>
        );
    }
    else if (Update===true){
        return (
            <Card className="col col-md-8" style={{margin : "10px"}} >
                <Form action="" className="form" method="">
                    <CardHeader>
                        <Row>
                            <h3>Update Information :</h3>
                            <Button onClick={changeCard} className="btn-round" style={{marginLeft:"auto", height:"50px" }} color="danger" outline type="button">cancel</Button>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Descriptions title="Basic">
                            <Descriptions.Item label="First Name" span={3}>
                                <Input
                                    defaultValue={FirstName}
                                    name="FirstName"
                                    onChange={(e) => onChange(e)}
                                    placeholder="First name"
                                    type="text"
                                ></Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="Last Name" span={3}>
                                <Input
                                    defaultValue={LastName}
                                    onChange={(e) => onChange(e)}
                                    name="LastName"
                                    placeholder="First name"
                                    type="text"
                                ></Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="Sex" span={3}>
                                <Input type="select"
                                       value={Sex}
                                       name="Sex"
                                       onChange={(e) => onChange(e)}
                                >
                                    <option value="male" style={{color : "black"}} >male</option>
                                    <option value="female" style={{color : "black"}}>female</option>
                                    <option value="unknown" style={{color : "black"}} >unknown</option>
                                </Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="Birth Date" span={3}>
                                <DatePicker
                                    className="form-control"
                                    selected={BirthDate}
                                    onChange={(e) => onChange(e)}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                <Input
                                    defaultValue={Email}
                                    name="Email"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Email"
                                    type="Email"
                                ></Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="Address" span={3}>
                                <Input
                                    defaultValue={Address}
                                    name="Address"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Address"
                                    type="text"
                                ></Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="Phone" span={3}>
                                <Input
                                    defaultValue={Phone}
                                    name="Phone"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Phone"
                                    type="number"
                                ></Input>
                            </Descriptions.Item>
                        </Descriptions>
                        <br/>
                        <Descriptions title="Medical">
                            <Descriptions.Item label="height" span={3}>
                                <Input
                                    defaultValue={height}
                                    name="height"
                                    onChange={(e) => onChange(e)}
                                    placeholder="height"
                                    type="number"
                                ></Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="weight" span={3}>
                                <Input
                                    defaultValue={weight}
                                    name="weight"
                                    onChange={(e) => onChange(e)}
                                    placeholder="weight"
                                    type="number"
                                ></Input>
                            </Descriptions.Item>
                            <Descriptions.Item label="IMC" span={3}>
                                {props.info.patient.IMC}
                            </Descriptions.Item>
                            <Descriptions.Item label="Blood Type" span={3}>
                                <Input type="select"
                                       value={BloodType}
                                       name="BloodType"
                                       onChange={(e) => onChange(e)}
                                >
                                    <option value="A+" style={{color : "black"}} >A+</option>
                                    <option value="A-" style={{color : "black"}}>A-</option>
                                    <option value="B+" style={{color : "black"}}>B+</option>
                                    <option value="B-" style={{color : "black"}}>B-</option>
                                    <option value="AB+" style={{color : "black"}}>AB+</option>
                                    <option value="AB-" style={{color : "black"}}>AB-</option>
                                    <option value="O+" style={{color : "black"}}>O+</option>
                                    <option value="O-" style={{color : "black"}}>O-</option>
                                    <option value="unknown" style={{color : "black"}} >unknown</option>
                                </Input>
                            </Descriptions.Item>
                        </Descriptions>
                    </CardBody>
                    <Button
                        className="btn-neutral btn-round"
                        color="info"
                        onClick={updatePatient}
                        size="lg"
                    >
                        Save
                    </Button>
                </Form>
            </Card>
        );
    }
}
export default GeneralInfo;
