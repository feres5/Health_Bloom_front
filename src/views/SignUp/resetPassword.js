import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
// reactstrap components
import {Button,Card,CardHeader,CardBody,CardFooter,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Container,Col} from "reactstrap";
// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import {useParams} from "react-router-dom";

function ResetPassword() {
    const navigate = useNavigate ()
    const [Password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const {userId,resetString}=useParams();
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

    async function login(){
        let item = ({
            userId,
            resetString,
            newPassword : Password
        });
        if (Password===confirmPassword){
            let result = await fetch(
                process.env.REACT_APP_BackEnd_url+"/users/resetForgottenPassword",
                {
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json",
                        "Accept":'application/json'
                    },
                    body: JSON.stringify(item)
                }
            );
            result = await result.json();
            console.log(result);
            navigate("/loginPage");
        }
    }

    return (
        <>
            {/*<ExamplesNavbar />*/}
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
                                            <img
                                                alt="..."
                                                src={require("assets/img/logoNav.png").default}
                                            ></img>
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
                                                    <i className="now-ui-icons objects_key-25"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Password..."
                                                type="password"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                onChange={(e) => setPassword(e.target.value)}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons objects_key-25"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Confirm Password..."
                                                type="password"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button block className="btn-round" color="info" onClick={login} size="lg">
                                            Reset Password
                                        </Button>
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

export default ResetPassword;
