import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

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

//protection of routes
import ProtectedRoute from "./protectedRoute";

import Shop from "./Shop/Shop";
import newProduct from "./Shop/pages/NewProduct";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Switch>
                <Route path="/index" render={(props) => <Index {...props} />}/>
                <Route
                    path="/nucleo-icons"
                    render={(props) => <NucleoIcons {...props} />}
                />
                <Route
                    path="/medical-magazine"
                    render={(props) => <MedicalMagazine {...props} />}
                />
                <Route
                    path="/article"
                    render={(props) => <ArticleDetails {...props} />}
                />
                <Route
                    path="/landing-page"
                    render={(props) => <LandingPage {...props} />}
                />
                {/*this route is protected, only access when logged in*/}
                <ProtectedRoute exact path="/profile-page"
                                component={ProfilePage}/>
                <Route
                    path="/login-page"
                    render={(props) => <LoginPage {...props} />}
                />
                <Route
                    path="/signUp"
                    render={(props) => <SignUp {...props} />}
                />
                <Route
                    path="/medical-signUp"
                    render={(props) => <MedicalSignUp {...props} />}
                />

                {/*this section is for dashboard routes*/}
                <Main>
                    <Route exact path="/dashboard" component={Home}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/add/product" component={newProduct}/>
                    <Route exact path="/tables" component={Tables}/>
                    <Route exact path="/billing" component={Billing}/>
                    <Route exact path="/rtl" component={Rtl}/>
                    <Route exact path="/profile" component={Profile}/>
                </Main>
                <Redirect to="/index"/>
                <Redirect from="/" to="/index"/>
            </Switch>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
