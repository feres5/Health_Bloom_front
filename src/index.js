import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes ,Route, Switch,Navigate } from "react-router-dom";

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

// pages for dashbord

import Home from "./Dashboard/pages/Home"
import Tables from "./Dashboard/pages/Tables";
import Billing from "./Dashboard/pages/Billing";
import Rtl from "./Dashboard/pages/Rtl";
import Profile from "./Dashboard/pages/Profile";
import Main from "./Dashboard/components/layout/Main";
import "antd/dist/antd.css";
import "./Dashboard/assets/styles/main.css";
import "./Dashboard/assets/styles/responsive.css";

//protection of routes
//import ProtectedRoute from "./protectedRoute";

ReactDOM.render(

  <BrowserRouter>
      <Routes>
        {/*this section is for FrontOffice routes*/}
        <Route path="/index" element={<Index/>} />
        <Route path="/nucleo-icons" element={<NucleoIcons/>} />
        <Route path="/medical-magazine" element={<MedicalMagazine/>} />
        <Route path="/article" element={<ArticleDetails/>} />
        <Route path="/landing-page" element={<LandingPage/>} />
        <Route path="/profile-page" element={<ProfilePage/>} />
        <Route path="/PatientProfile" element={<ProfilePatient/>} />
        <Route path="/login-page" element={<LoginPage/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/medical-signUp" element={<MedicalSignUp/>} />
        <Route path=""  element={<Navigate replace to="index"/>} />

        {/*this section is for dashboard routes*/}
        {/*you need to put the component that u want to redirect to inside <Main></Main> in element*/}
        <Route path="/dashboard" element={<Main> <Home/> </Main>} />
        <Route path="/dashboard/tables" element={<Main> <Tables/> </Main>} />
        <Route path="/dashboard/billing" element={<Main> <Billing/> </Main>} />
        <Route path="/dashboard/rtl" element={<Main> <Rtl/> </Main>} />
        <Route path="/dashboard/profile" element={<Main> <Profile/> </Main>} />

      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
