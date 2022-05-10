import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Row,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import jwt_decode from "jwt-decode";

function LoginPage() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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

  async function login() {
    let item = { Email, Password };
    let result = await fetch("http://127.0.0.1:3002/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    if (result.status === 401) {
      console.log("you need to enter all of your credentials");
    }
    result = await result.json();
    checkCompleteProfile(result);
  }

  const responseSuccessGoogle = (response) => {
    //console.log(response);
    axios({
      method: "POST",
      url: "http://127.0.0.1:3002/users/googleLogin",
      data: { tokenId: response.tokenId },
    }).then(async (response) => {
      checkCompleteProfile(response.data);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  //this function is to check if user info is complete or not and redirect to the necessary page
  function checkCompleteProfile(token) {
    var decodedTOKEN = jwt_decode(token, { payload: true });
    axios({
      method: "GET",
      url: "http://127.0.0.1:3002/users/getById/" + decodedTOKEN.user_id,
    }).then(async (response) => {
      //console.log(response.data.Role);
      if (response.data.Role === "unknown") {
        navigate("/completeProfile/" + decodedTOKEN.user_id);
      } else if (!response.data.doctor.Speciality) {
        navigate(`/join-doctor/${decodedTOKEN.restUserInfo}`);
      } else {
        await localStorage.setItem("user_info", token);
        navigate("/index");
      }
    });
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
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e) => setEmail(e.target.value)}
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
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Row>
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        onClick={login}
                        size="lg"
                      >
                        Login
                      </Button>
                      <GoogleLogin
                        clientId="410085321469-ndnv3jtljc9fksblkbtdv9lvu6gnv614.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </Row>
                    <div className="pull-left">
                      <h6>
                        <a className="link" href="/signUp">
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a href="/forgotPassword" className="link">
                          Forgot your password ?
                        </a>
                      </h6>
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

export default LoginPage;
