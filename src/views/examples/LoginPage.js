import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import  GoogleLogin  from 'react-google-login';
import axios from "axios";
// reactstrap components
import {Button,Card,CardHeader,Row,CardBody,CardFooter,Form,Input,InputGroupAddon,FormFeedback,FormText,InputGroupText,InputGroup,Container,Col} from "reactstrap";
import {useFormik} from "formik";
import * as yup from 'yup';

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import jwt_decode from "jwt-decode";
import {InputBase} from "@mui/material";

function LoginPage() {
  const navigate = useNavigate ()
  const [error, setError]= useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const validationSchema = yup.object({
    Email: yup.string().email().required(),
    Password: yup.string().required()
  })

  const formik = useFormik({
    initialValues: {Email:"",Password:""},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  });

  async function onSubmit(values) {
    console.log(values);
    let result = await fetch(
        process.env.REACT_APP_BackEnd_url+"/users/login",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
          },
          body: JSON.stringify(values)
        }
    );
    if (result.status === 200) {
      result = await result.json();
      checkCompleteProfile(result)
    } else if (result.status === 401) {
      alert("you need to enter all of your credentials");
    } else if (result.status === 402) {
      alert("wrong email");
    } else if (result.status === 400) {
      alert("wrong password");
    }

  }

  //google response
  const responseSuccessGoogle = (response) => {
    //console.log(response);
    axios({
      method: "POST",
      url: process.env.REACT_APP_BackEnd_url+"/users/googleLogin",
      data : {tokenId: response.tokenId}
    }).then(async response => {
      checkCompleteProfile(response.data)
    })
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  //this function is to check if user info is complete or not and redirect to the necessary page
  function checkCompleteProfile(token){
    var decodedTOKEN = jwt_decode(token,{payload : true});
    axios({
      method: "GET",
      url: process.env.REACT_APP_BackEnd_url+"/users/getById/"+ decodedTOKEN.user_id,
    }).then(async response => {
      //console.log(response.data.Role);
      if (response.data.Role ==="unknown"){
        navigate("/completeProfile/"+decodedTOKEN.user_id)
      }
      else {
        await localStorage.setItem("user_info", token);
        navigate("/index");
      }

    })
  }

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
                <Form action="" className="form" method="" onSubmit={formik.handleSubmit}>
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
                          name="Email"
                          placeholder="Email..."
                          type="email"
                          onBlur={formik.handleBlur}
                          value={formik.values.Email}
                          onChange={formik.handleChange}
                      ></Input>
                    </InputGroup>
                    <FormText style={{color: "red"}}>{formik.touched.Email && formik.errors.Email ? formik.errors.Email : ""}</FormText>
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
                          name="Password"
                          placeholder="Password..."
                          type="password"
                          onBlur={formik.handleBlur}
                          value={formik.values.Password}
                          onChange={formik.handleChange}
                      ></Input>
                    </InputGroup>
                    <FormText style={{color: "red"}}>{formik.touched.Password && formik.errors.Password ? formik.errors.Password : ""}</FormText>
                    <Button block className="btn-round" style={{backgroundColor: "#2CA8FF" }} disabled={!formik.isValid} type="submit" size="lg">Login</Button>
                    <Row>
                      <div style={{margin: "auto"}}>
                        <GoogleLogin
                            clientId="410085321469-ndnv3jtljc9fksblkbtdv9lvu6gnv614.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                      </div>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="pull-left">
                      <h6>
                        <a className="link" href="/signUp">Create Account</a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a href="/forgotPassword" className="link">Forgot your password ?</a>
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
