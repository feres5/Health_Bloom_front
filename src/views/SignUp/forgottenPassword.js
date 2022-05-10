import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {Button,Card,CardHeader,CardBody,CardFooter,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Container,Col} from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";

function ForgottenPassword() {
    const navigate = useNavigate ()
    const [email, setEmail]= useState("");
    const redirectUrl ="http://localhost:3000/resetPassword";
    const [firstFocus, setFirstFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    async function sendMail(){
        let params = {email, redirectUrl};
        console.log(params);
        let result = await fetch(
            "http://127.0.0.1:3002/users/forgetPassword",
            {
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":'application/json'
                },
                body: JSON.stringify(params)
            }
        );
    }
    return (
        <>
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/login.jpg").default + ")",
                    }}
                ></div>
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                            <Card className="card-login card-plain">
                                <Form action="" className="form" method="">
                                    <CardHeader className="text-center">
                                        <div className="logo-container">
                                            <img alt="..." src={require("assets/img/logoNav.png").default}></img>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="email..."
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                onChange={(e) => setEmail(e.target.value)}
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button block className="btn-round" color="info" onClick={sendMail} size="lg">Submit</Button>
                                        <div className="pull-left">
                                            <h6><a className="link" href="/signUp">Create Account</a></h6>
                                        </div>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <TransparentFooter />
            </div>
        </>
    );
}

export default ForgottenPassword;
