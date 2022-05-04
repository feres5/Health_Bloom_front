import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

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

import SectionThreads from "./Dashboard/pages/forum/section-threads.js"
import Thread from "./Dashboard/pages/forum/thread";
import CreateThread from "./Dashboard/pages/forum/create-thread";
import ForumWelcome from "./Dashboard/pages/forum/forum-welcome.js";

//protection of routes
//import ProtectedRoute from "./protectedRoute";
import Articles from "Dashboard/pages/Articles/Articles";
import ArticleDetailsDashboard from "Dashboard/pages/Articles/ArticleDetails";
import ArticleForm from "Dashboard/pages/Articles/ArticleForm";
import HomeShop from "./Shop/Home";
import ArticleComments from "views/Magazine/ArticleComments";
import Shop from "./Shop/Shop";
import AsisstantProfile from "./Dashboard/pages/Assistants/AsisstantProfile";
import AsisstantProfile2 from "./Dashboard/pages/Assistants/AsisstantProfile2";
import EditAssistantProfile from "./Dashboard/pages/Assistants/EditAssistantProfile";
import {CartProvider} from "react-use-cart";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    type: 'success',
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

ReactDOM.render(
    <CartProvider>
        <AlertProvider template={AlertTemplate} {...options}>
            <BrowserRouter>
                <Routes>
                    {/*this section is for FrontOffice routes*/}
                    <Route path="/index" element={<Index/>} />
                    <Route path="/shop" element={<HomeShop/>} />
                    <Route path="/nucleo-icons" element={<NucleoIcons/>} />
                    <Route path="/medical-magazine" element={<MedicalMagazine/>} />
                    <Route path="/article" element={<ArticleDetails/>} />
                    <Route path="/comments" element={<ArticleComments/>} />
                    <Route path="/landarticleForming-page" element={<LandingPage/>} />
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
                    <Route path="/dashboard/profile" element={<Main> <AsisstantProfile/> </Main>} />
                    <Route path="/dashboard/editprofile" element={<Main> <EditAssistantProfile/> </Main>} />
                    <Route path="/admin/shop" element={<Main> <Shop/> </Main>} />
                    <Route path="/dashboard/forum/section/:id" element={<Main> <SectionThreads/> </Main>} />
                    <Route path="/dashboard/forum/thread/:id" element={<Main> <Thread/> </Main>} />
                    <Route path="/dashboard/forum" element={<Main> <ForumWelcome/> </Main>} />
                    <Route path="/dashboard/forum/create-thread" element={<Main> <CreateThread/> </Main>} />
                    <Route path="/articles" element={<Main> <Articles/> </Main>} />
                    <Route path="/articleDetails" element={<Main> <ArticleDetailsDashboard/> </Main>} />
                    <Route path="/articleForm" element={<Main> <ArticleForm/> </Main>} />

                </Routes>
            </BrowserRouter>
        </AlertProvider>
    </CartProvider>,
    document.getElementById("root")
);
