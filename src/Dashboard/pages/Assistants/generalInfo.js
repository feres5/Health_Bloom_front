import React, {useState} from "react";
import {Button, Card, CardBody, CardHeader, Input, Row} from "reactstrap";
import {Descriptions} from "antd";
import { Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useNavigate  } from 'react-router-dom';

function GeneralInfo(props) {
    const navigate = useNavigate ();
   console.log(props.info.user);
    // console.log(props.info.patient);
    const url = "http://localhost:3002/users/";

    const getFormattedDate = (dateStr) => {
        return moment(dateStr).toDate();
    }

    const [formData, setFormData] = useState({
        id : props.info.user._id,
        FirstName: props.info.user.FirstName,
        LastName: props.info.user.LastName,
        Email: props.info.user.Email,
        Address:props.info.user.Address,
        Phone:props.info.user.Phone,
        assistant:props.info._assistant,
        //Speciality : props.info.assistant.Speciality,
        //Description : props.info.assistant.Description,
    });
    const {id,FirstName,LastName,Email,Address,Phone,assistant} = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    async function updateassistant() {
        console.log(formData);
        let result = await fetch(
            url+"editassistant/"+id,
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
        navigate("/assistantProfile2");
    }



    //switching between the 2 cards
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
                        <Descriptions.Item label="Email" span={3}>
                            {props.info.user.Email}
                        </Descriptions.Item>
                        <Descriptions.Item label="Address" span={3}>
                            {props.info.user.Address}
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone" span={3}>
                            {props.info.user.Phone}
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone" span={3}>
                            {props.info.user._assistant}
                        </Descriptions.Item>
                    </Descriptions>
                    <br/>
                    {/*<Descriptions title="Medical">*/}
                    {/*    <Descriptions.Item label="Speciality" span={3}>*/}
                    {/*        {props.info.assistant.Speciality}*/}
                    {/*    </Descriptions.Item>*/}
                    {/*    <Descriptions.Item label="Description" span={3}>*/}
                    {/*        {props.info.assistant.Description}*/}
                    {/*    </Descriptions.Item>*/}
                    {/*</Descriptions>*/}
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
                            {/*<Descriptions.Item label="Speciality" span={3}>*/}
                            {/*    <Input*/}
                            {/*        defaultValue={Speciality}*/}
                            {/*        name="Speciality"*/}
                            {/*        onChange={(e) => onChange(e)}*/}
                            {/*        placeholder="Speciality"*/}
                            {/*        type="text"*/}
                            {/*    ></Input>*/}
                            {/*</Descriptions.Item>*/}
                            {/*<Descriptions.Item label="Description" span={3}>*/}
                            {/*    <Input*/}
                            {/*        defaultValue={Description}*/}
                            {/*        name="Description"*/}
                            {/*        onChange={(e) => onChange(e)}*/}
                            {/*        placeholder="Description"*/}
                            {/*        type="text"*/}
                            {/*    ></Input>*/}
                            {/*</Descriptions.Item>*/}

                        </Descriptions>
                    </CardBody>
                    <Button
                        className="btn-neutral btn-round"
                        color="info"
                        onClick={updateassistant}
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
