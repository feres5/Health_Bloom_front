import "./assets/css/datatables.bundle.scoped.css"
import "./assets/css/plugins.bundle.scoped.css"
import "./assets/css/style.bundle.scoped.css"

import React, {useEffect, useState} from "react";
import {useHttpClient} from "../../shared/hooks/http-hook";
import CouponsList from "./CouponsList";
import {Link, useRouteMatch} from "react-router-dom";



const Coupons = () => {

    const {path, url} = useRouteMatch();

    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedCoupons, setLoadedCoupons] = useState();

    useEffect(() => {
        const fecthCoupons = async () => {

            try {
                const responseData = await sendRequest('http://localhost:3002/api/coupons');

                setLoadedCoupons(responseData.coupons);
                console.log(responseData);
            } catch (e) {
                console.log(e);
            }

        };
        fecthCoupons();


    }, [sendRequest]);

    const couponDeletedHandler = deletedCouponId => {
        setLoadedCoupons(prevCoupons => prevCoupons.filter(coupon => coupon.id !== deletedCouponId));
    };
    return (

        <>
            <div
                className="card-header align-items-center py-5 gap-2 gap-md-5">

                <div className="card-title">

                    <div
                        className="d-flex align-items-center position-relative my-1">


                    </div>

                </div>

                <div className="card-toolbar">

                    <Link to={`${path}/add`}>
                      <button className="btn btn-primary">Add Coupon</button>
                    </Link>
                </div>

            </div>
            <div className="card-body pt-0">

                <table
                    className="table align-middle table-row-dashed fs-6 gy-5"
                    id="kt_ecommerce_category_table">

                    <thead>

                    <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                        <th className="w-10px pe-2">
                            <div
                                className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                <input className="form-check-input"
                                       type="checkbox" data-kt-check="true"
                                       data-kt-check-target="#kt_ecommerce_category_table .form-check-input"
                                       value="1"/>
                            </div>
                        </th>
                        <th className="min-w-250px">Category</th>
                        <th className="min-w-150px">Category Type</th>
                        <th className="text-end min-w-70px">Actions</th>
                    </tr>

                    </thead>

                    <tbody className="fw-bold text-gray-600">
                    {!isLoading && loadedCoupons &&
                        <CouponsList
                            items={loadedCoupons}
                            onDeleteCoupon={couponDeletedHandler}
                        />


                    }

                    </tbody>

                </table>

            </div>

        </>

    );
};

export default Coupons;