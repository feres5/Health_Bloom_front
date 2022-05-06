import "./assets/css/datatables.bundle.scoped.css"
import "./assets/css/plugins.bundle.scoped.css"
import "./assets/css/style.bundle.scoped.css"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useHttpClient} from "../../shared/hooks/http-hook";

const UpdateCoupon = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const [loadedCoupon, setLoadedCoupon] = useState();

    const [percentage, setPercentage] = useState(50);
    const [nameValue, setNameValue] = useState("");
    const couponId = useParams().couponId;
    const history = useHistory();


    useEffect(() => {
        const fetchCoupon = async () => {
            try {

                const responseData = await sendRequest(
                    `http://localhost:3002/api/coupons/${couponId}`
                );

                setLoadedCoupon(responseData.coupon);
                setPercentage(responseData.coupon.percentage)
                setNameValue(responseData.coupon.name)
                console.log(responseData);

            } catch (e) {
                console.log(e);
            }
        };
        fetchCoupon();
    }, [sendRequest, couponId, setLoadedCoupon]);


    const couponSubmitHandler = async event => {
        event.preventDefault();

        try {
            await sendRequest(`http://localhost:3002/api/coupons/${couponId}`,
                'PATCH',
                JSON.stringify({
                    name: nameValue,
                    percentage: percentage
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            history.push('/admin/coupons');
        } catch (e) {
            console.log(e);
        }

    };


    const changeHandler = event => {
        setNameValue(event.target.value);
        console.log(nameValue);
    }
    return (
        <>
            {!isLoading && loadedCoupon &&
                <div className="card-body pt-0">

                    <div className="mb-10 fv-row">

                        <label className="required form-label">Coupon
                            name</label>


                        <input type="text" name="price"
                               value={nameValue}
                               onChange={changeHandler}
                               className="form-control mb-2"
                               placeholder="Coupon name"/>


                        <div className="text-muted fs-7">Set the coupon
                            name.
                        </div>

                    </div>

                    <div className="fv-row mb-10">

                        <label className="fs-6 fw-bold mb-2">Percentage
                            <i className="fas fa-exclamation-circle ms-2 fs-7"
                               data-bs-toggle="tooltip"
                               title="Select a discount type that will be applied to this product"></i></label>

                        <div
                            className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
                            data-kt-buttons="true"
                            data-kt-buttons-target="[data-kt-button='true']">

                            {/*<div className="col">*/}

                            {/*    <label*/}
                            {/*        className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6"*/}
                            {/*        data-kt-button="true">*/}

                            {/*<span*/}
                            {/*    className="form-check form-check-custom form-check-solid form-check-sm mr-lg-3 ">*/}
                            {/*    <input*/}
                            {/*        className="form-check-input"*/}
                            {/*        type="radio"*/}
                            {/*        name="discount_option"*/}
                            {/*        value="2"/>*/}
                            {/*</span>*/}

                            {/*        <span className="ms-5">*/}
                            {/*            <span*/}
                            {/*                className="fs-4 fw-bolder text-gray-800 d-block mr-lg-5">Percentage %</span>*/}
                            {/*        </span>*/}

                            {/*    </label>*/}
                            {/*</div>*/}


                        </div>
                    </div>


                    <div
                        className="d-flex align-items-start justify-content-center mb-7">
                <span className="fw-bolder fs-3x"
                      id="kt_ecommerce_add_product_discount_label">{percentage}</span>
                        <span className="fw-bolder fs-4 mt-1 ms-2">%</span>
                    </div>
                    <RangeSlider
                        value={percentage}
                        tooltip='off'
                        onChange={changeEvent => setPercentage(changeEvent.target.value)}
                    />
                    <div
                        className="card-header align-items-center py-5 gap-2 gap-md-5">

                        <div className="card-title">

                            <div
                                className="d-flex align-items-center position-relative my-1">


                            </div>

                        </div>

                        <div className="card-toolbar">

                            <a onClick={couponSubmitHandler}
                               className="btn btn-primary">Add Coupon</a>

                        </div>

                    </div>
                </div>
            }

        </>
    );
}

export default UpdateCoupon;