import "./assets/css/datatables.bundle.scoped.css"
import "./assets/css/plugins.bundle.scoped.css"
import "./assets/css/style.bundle.scoped.css"

import React from "react";
import Coupons from "./Coupons";
import {Switch} from "react-router";
import {Redirect, Route, useRouteMatch} from "react-router-dom";
import NewCoupon from "./NewCoupon";
import UpdateCoupon from "./UpdateCoupon";

const HomeCoupons = () => {

    const {path, url} = useRouteMatch();


    return (
        <div id="kt_content_container" className="container-xxl">

            <div className="card card-flush">

                <Switch>
                    <Route exact path={`${path}/coupons/add`}>
                        <NewCoupon/>
                    </Route>
                    <Route exact path={`${path}/coupons/edit/:couponId`}>
                        <UpdateCoupon/>
                    </Route>
                    <Route exact path={`${path}/coupons`}>
                        <Coupons/>
                    </Route>


                    <Redirect exact to={`${path}/coupons`}/>

                </Switch>
            </div>

        </div>
    );
};

export default HomeCoupons;