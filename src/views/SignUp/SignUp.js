import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
} from "reactstrap";
import axios from "axios";

// core components

function SignUp() {
    const navigate = useNavigate()
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    //credentials
    const [formData, setFormData] = useState({
        Role: "Patient",
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        Address:"",
        Phone:""
    });
    const {Role,FirstName,LastName,Email,Password,Address,Phone} = formData;
    const [ConfirmPassword,setConfirmPassword]= useState("");


    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    async function Register(){
        console.log("register a new user");
        console.log(formData);
        console.log(ConfirmPassword);
        if(formData.Password === ConfirmPassword){
            console.log("password ok");
            let result = await fetch(
                process.env.REACT_APP_BackEnd_url+"/users/addUser",
                {
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json",
                        "Accept":'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );
            if(result.status===200){
                alert("welcome to health bloom");
                let token = await result.json();
                await localStorage.setItem("user_info", token);
                navigate("/index");
            } else if(result.status===400){
                alert("this email already exists");
            }
        }
        else {
            console.log("password no match");
        }
    }

    return (
        <>
            <div
                className="section section-signup"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/bg11.jpg").default + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    minHeight: "700px",
                }}
            >
                <Container>
                    <Row>
                        <Card className="card-signup" data-background-color="blue">
                            <Form action="" className="form" method="">
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">
                                        Sign Up
                                    </CardTitle>
                                    <div className="social-line">
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="facebook"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </Button>
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="twitter"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="lg"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Button>
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="google"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-google-plus"></i>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons business_badge"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="select"
                                               value={Role}
                                               name="Role"
                                               onChange={(e) => onChange(e)}
                                        >
                                            <option value="Patient" style={{color : "black"}} >Patient</option>
                                            <option value="Doctor" style={{color : "black"}}>Doctor</option>
                                            <option value="Assistant" style={{color : "black"}}>Assistant</option>

                                        </Input>
                                    </InputGroup>

                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="First Name..."
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                            name="FirstName"
                                            value={FirstName}
                                            onChange={(e) => onChange(e)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (lastFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Last Name..."
                                            type="text"
                                            onFocus={() => setLastFocus(true)}
                                            onBlur={() => setLastFocus(false)}
                                            name="LastName"
                                            value={LastName}
                                            onChange={(e) => onChange(e)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (emailFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_email-85"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email..."
                                            type="email"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                            name="Email"
                                            value={Email}
                                            onChange={(e) => onChange(e)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons objects_key-25"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Password..."
                                            type="password"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                            name="Password"
                                            value={Password}
                                            onChange={(e) => onChange(e)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Confirm Password..."
                                            type="password"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                            name="ConfirmPassword"
                                            value={ConfirmPassword}
                                            onChange={e => {setConfirmPassword(e.target.value)}}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons location_pin"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Address..."
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                            name="Address"
                                            value={Address}
                                            onChange={(e) => onChange(e)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons location_world"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="City..."
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" + (firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons tech_mobile"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Phone..."
                                            type="number"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                            name="Phone"
                                            value={Phone}
                                            onChange={(e) => onChange(e)}
                                        ></Input>
                                    </InputGroup>


                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button
                                        className="btn-neutral btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={Register}
                                        size="lg"
                                    >
                                        Get Started
                                    </Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Row>

                    <div className="col text-center">
                        <Button
                            className="btn-round btn-white"
                            color="default"
                            to="/login-page"
                            outline
                            size="lg"
                            tag={Link}
                        >
                            View Login Page
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SignUp;

