import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Row, Col, Card, Avatar, Radio } from "antd";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "./views/SignUp/SignUp";
import MedicalSignUp from "./views/index-sections/MedicalSignUp";
import MedicalMagazine from "views/Magazine/MedicalMagazine";
import ArticleDetails from "views/Magazine/ArticleDetails";
import ProfilePatient from "views/Patient/Profile";
import ForgottenPassword from "views/SignUp/forgottenPassword";
import ResetPassword from "views/SignUp/resetPassword";
import CompleteProfile from "views/SignUp/CompleteProfile";
//doctor pages
import JoinDoctor from "views/doctor/JoinDoctor";

// pages for dashbord
import Home from "./Dashboard/pages/Home";
import Tables from "./Dashboard/pages/Tables";
import Billing from "./Dashboard/pages/Billing";
import Rtl from "./Dashboard/pages/Rtl";
import Profile from "./Dashboard/pages/Profile";
import Main from "./Dashboard/components/layout/Main";
import "antd/dist/antd.css";
import "./Dashboard/assets/styles/main.css";
import "./Dashboard/assets/styles/responsive.css";
import DoctorProfileBack from "views/doctor/dashboard/DoctorProfileBack";
import Calandar from "views/schedule/Calandar";

import BgProfile from "./Dashboard/assets/images/bg-profile.jpg";
import profilavatar from "./Dashboard/assets/images/face-1.jpg";
import mapImg from "./Dashboard/assets/images/map.jpg";
import Doctors from "views/doctor/Doctors";
import Map from "views/map/Map";
import DoctorProfileFront from "views/doctor/DoctorProfileFront";
//protection of routes
//import ProtectedRoute from "./protectedRoute";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/*this section is for FrontOffice routes*/}
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/medical-magazine" element={<MedicalMagazine />} />
      <Route path="/article" element={<ArticleDetails />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/PatientProfile" element={<ProfilePatient />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgottenPassword />} />
      <Route
        path="/resetPassword/:userId/:resetString"
        element={<ResetPassword />}
      />

      <Route path="/signUp" element={<SignUp />} />
      <Route path="/medical-signUp" element={<MedicalSignUp />} />
      <Route path="/completeProfile/:userId" element={<CompleteProfile />} />

      {/* doctor routes front routes section */}
      <Route
        path="/doctor-profile-front/:id"
        element={<DoctorProfileFront />}
      />
      <Route path="/join-doctor/:doctorId" element={<JoinDoctor />} />
      <Route path="/doctors" element={<Doctors />} />
      {/* end Doctor front routes section */}

      {/*  */}
      <Route path="" element={<Navigate replace to="index" />} />

      {/*this section is for dashboard routes*/}
      {/*you need to put the component that u want to redirect to inside <Main></Main> in element*/}
      <Route
        path="/dashboard"
        element={
          <Main>
            <DoctorProfileBack />
          </Main>
        }
      />
      <Route
        path="/calandar"
        element={
          <Main>
            <div
              className="profile-nav-bg"
              style={{ backgroundImage: "url(" + mapImg + ")" }}
            ></div>
            <Card
              className="card-profile-head"
              bodyStyle={{ display: "none" }}
              title={
                <Row justify="space-between" align="middle" gutter={[24, 0]}>
                  <Col span={24} md={8} className="col-info">
                    <Avatar.Group>
                      <Avatar size={74} shape="square" src={profilavatar} />
                      <div className="avatar-info">
                        <h4 className="font-semibold m-0">Schedule</h4>
                        <p> Manage your appointments </p>
                      </div>
                    </Avatar.Group>
                  </Col>
                  <Col
                    span={24}
                    md={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Radio.Group defaultValue="a">
                      <Radio.Button value="a">OVERVIEW</Radio.Button>
                      <Radio.Button value="b">TEAMS</Radio.Button>
                      <Radio.Button value="c">PROJECTS</Radio.Button>
                    </Radio.Group>
                  </Col>
                </Row>
              }
            ></Card>
            <Calandar />
          </Main>
        }
      />
      <Route
        path="/map"
        element={
          <Main>
            <div
              className="profile-nav-bg"
              style={{ backgroundImage: "url(" + mapImg + ")" }}
            ></div>
            <Card
              className="card-profile-head"
              bodyStyle={{ display: "none" }}
              title={
                <Row justify="space-between" align="middle" gutter={[24, 0]}>
                  <Col span={24} md={8} className="col-info">
                    <Avatar.Group>
                      <Avatar size={74} shape="square" src={profilavatar} />
                      <div className="avatar-info">
                        <h4 className="font-semibold m-0">Schedule</h4>
                        <p> Manage your appointments </p>
                      </div>
                    </Avatar.Group>
                  </Col>
                  <Col
                    span={24}
                    md={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Radio.Group defaultValue="a">
                      <Radio.Button value="a">OVERVIEW</Radio.Button>
                      <Radio.Button value="b">TEAMS</Radio.Button>
                      <Radio.Button value="c">PROJECTS</Radio.Button>
                    </Radio.Group>
                  </Col>
                </Row>
              }
            ></Card>
            <Map />
          </Main>
        }
      />
      <Route path="/dashboard/tables" element={<Main><Tables /></Main>}/>
      <Route path="/dashboard/billing" element={<Main><Billing /></Main>}/>
      <Route path="/dashboard/rtl" element={<Main><Rtl /></Main>}/>
      <Route path="/dashboard/profile" element={<Main><Profile/></Main>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
