import React, {useState} from "react";
import { Link } from "react-router-dom";
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

// core components

function MedicalSignUp() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    //credentials
    const [formData, setFormData] = useState({
        Speciality: "",
        Description: ""
    });
    const {Speciality,Description} = formData;

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
                                        Medical Core
                                    </CardTitle>
                                    <CardTitle className="title-up" tag="h3">
                                        Sign Up
                                    </CardTitle>

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

                                        <Input id="exampleFormControlSelect2" multiple="" type="select">
                                            <option>nurse</option>
                                            <option>Care giver</option>
                                            <option>Physiotherapist</option>
                                        </Input>
                                    </InputGroup>
                                    <InputGroup
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons location_pin"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Speciality..."
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                        ></Input>
                                    </InputGroup>

                                    <InputGroup
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Description"
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
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

export default MedicalSignUp;
