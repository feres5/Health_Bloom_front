import "./assets/css/datatables.bundle.scoped.css"
import "./assets/css/plugins.bundle.scoped.css"
import "./assets/css/style.bundle.scoped.css"

import React from "react";
import Coupons from "./Coupons";
import {Switch} from "react-router";
import {
    Route,
    useRouteMatch,
    Navigate,
    useLocation,
    Routes
} from "react-router-dom";
import NewCoupon from "./NewCoupon";
import UpdateCoupon from "./UpdateCoupon";

const HomeCoupons = () => {

    let path = useLocation().pathname;

    console.log(path);
    return (
        <div id="kt_content_container" className="container-xxl">

            <div className="card card-flush">

                <Routes>
                    <Route path="/add"
                           element={<NewCoupon/>}>

                    </Route>
                    <Route path="/edit/:couponId"
                           element={<UpdateCoupon/>}>
                    </Route>
                    <Route path="/" element={<Coupons/>}>

                    </Route>

                    <Route
                        path="*"
                        element={<Navigate to="/admin/coupons" replace/>}
                    />
                </Routes>

            </div>

        </div>
    );
};

export default HomeCoupons;