import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import "./cart.css"
import CheckoutItem from "./CheckoutItem";
import React from "react";
import {useCart} from "react-use-cart";
import {loadStripe} from "@stripe/stripe-js";
import {useHttpClient} from "../../../../shared/hooks/http-hook";


const Checkout = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
        metadata
    } = useCart();
    const checkoutSubmitHandler = async event => {
        event.preventDefault();

        try {


           const data =  await sendRequest('http://localhost:3002/api/products/checkout',
                'POST',
                JSON.stringify({
                    items,
                    discount: metadata.discount
                }),
                {
                    'Content-Type': 'application/json'
                }
            );

            if (data.url) {
                window.location = data.url;
            }
        } catch (e) {
            console.log(e);
        }

    };


    return (
        <>
            <div id="CartHeader">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="index.html" rel="nofollow"><i
                            className="fi-rs-home mr-5"></i>Home</a>
                        <span></span> Shop
                        <span></span> Checkout
                    </div>
                </div>
            </div>
            <div className="container mb-80 mt-50">
                <div className="row">
                    <div className="col-lg-8 mb-40">
                        <h1 className="heading-2 mb-10">Checkout</h1>
                        <div className="d-flex justify-content-between">
                            <h6 className="text-body">There are <span
                                className="text-brand">3</span> products in your
                                cart
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row mb-50">
                            {/*<div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">*/}
                            {/*    <div style={{marginTop: "10px"}}*/}
                            {/*         className="toggle_info">*/}
                            {/*    <span><i className="fi-rs-user mr-10"></i><span*/}
                            {/*        className="text-muted font-lg">Already have an account?</span> <a*/}
                            {/*        href="#loginform" data-bs-toggle="collapse"*/}
                            {/*        className="collapsed font-lg"*/}
                            {/*        aria-expanded="false">Click here to login</a></span>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        className="panel-collapse collapse login_form"*/}
                            {/*        id="loginform">*/}
                            {/*        <div className="panel-body">*/}
                            {/*            <p className="mb-30 font-sm">If you have*/}
                            {/*                shopped*/}
                            {/*                with us before, please enter your*/}
                            {/*                details below. If you are a new*/}
                            {/*                customer, please proceed to the*/}
                            {/*                Billing &amp; Shipping section.</p>*/}
                            {/*            <form method="post">*/}
                            {/*                <div className="form-group">*/}
                            {/*                    <input type="text" name="email"*/}
                            {/*                           placeholder="Username Or Email"/>*/}
                            {/*                </div>*/}
                            {/*                <div className="form-group">*/}
                            {/*                    <input type="password"*/}
                            {/*                           name="password"*/}
                            {/*                           placeholder="Password"/>*/}
                            {/*                </div>*/}
                            {/*                <div*/}
                            {/*                    className="login_footer form-group">*/}
                            {/*                    <div className="chek-form">*/}
                            {/*                        <div*/}
                            {/*                            className="custome-checkbox">*/}
                            {/*                            <input*/}
                            {/*                                className="form-check-input"*/}
                            {/*                                type="checkbox"*/}
                            {/*                                name="checkbox"*/}
                            {/*                                id="remember"*/}
                            {/*                                value=""/>*/}
                            {/*                            <label*/}
                            {/*                                className="form-check-label"*/}
                            {/*                                htmlFor="remember"><span>Remember me</span></label>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <a href="#">Forgot password?</a>*/}
                            {/*                </div>*/}
                            {/*                <div className="form-group">*/}
                            {/*                    <button className="btn btn-md"*/}
                            {/*                            name="login">Log in*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </form>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-6">*/}
                            {/*    <form method="post" className="apply-coupon">*/}
                            {/*        <input style={{marginTop: "10px"}}*/}
                            {/*               type="text"*/}
                            {/*               placeholder="Enter Coupon Code..."/>*/}
                            {/*        <button className="btn  btn-md"*/}
                            {/*                name="login">Apply Coupon*/}
                            {/*        </button>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                        </div>
                        <div className="row">
                            <h4 className="mb-30">Billing Details</h4>
                            <form method="post">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" required=""
                                               name="fname"
                                               value="wassim"
                                               placeholder="First name *"/>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" required=""
                                               name="lname"
                                               value="benfraj"
                                               placeholder="Last name *"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text"
                                               name="billing_address"
                                               value="Tunis"
                                               required=""
                                               placeholder="Address *"/>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text"
                                               name="billing_address2"
                                               value="Tunis"
                                               required=""
                                               placeholder="Address line2"/>
                                    </div>
                                </div>
                                <div className="row shipping_calculator">
                                    <div className="form-group col-lg-6">
                                        <div className="custom_select">
                                            <select
                                                className="form-control select-active">
                                                <option value="">Select an
                                                    option...
                                                </option>
                                                <option value="AX">Aland Islands
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input required="" type="text"
                                               name="city"
                                               value="Tunisia"
                                               placeholder="City / Town *"/>
                                    </div>
                                </div>

                                <div id="collapsePassword"
                                     className="form-group create-account collapse in">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input required="" type="password"
                                                   placeholder="Password"
                                                   name="password"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="border p-40 cart-totals ml-30 mb-50">

                            <div className="divider-2 mb-30"></div>
                            <div
                                className="table-responsive order_table checkout">
                                <table className="table no-border">
                                    <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <CheckoutItem image={item.image}
                                                          name={item.name}
                                                          quantity={item.quantity}
                                                          price={item.price}
                                                          key={index}
                                                          item={item}
                                                          id={item.id}
                                            />
                                        );
                                    })}

                                    </tbody>
                                </table>
                            </div>
                            <div
                                className="d-flex align-items-end justify-content-between mb-30">
                                <h4>Your Order</h4>

                                <div>
                                    <h4 className="text-brand"
                                    >${metadata.finalPrice}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="payment ml-30">
                            <h4 className="mb-30">Payment</h4>
                            <div className="payment_option">
                                <div className="custome-radio">
                                    <input className="form-check-input"
                                           required=""
                                           type="radio"
                                           name="payment_option"
                                           id="exampleRadios3" checked=""/>
                                    <label className="form-check-label"
                                           htmlFor="exampleRadios3"
                                           data-bs-toggle="collapse"
                                           data-target="#bankTranfer"
                                           aria-controls="bankTranfer">Direct
                                        Bank
                                        Transfer</label>
                                </div>
                                <div className="custome-radio">
                                    <input className="form-check-input"
                                           required=""
                                           type="radio"
                                           name="payment_option"
                                           id="exampleRadios4" checked=""/>
                                    <label className="form-check-label"
                                           htmlFor="exampleRadios4"
                                           data-bs-toggle="collapse"
                                           data-target="#checkPayment"
                                           aria-controls="checkPayment">Cash on
                                        delivery</label>
                                </div>
                                <div className="custome-radio">
                                    <input className="form-check-input"
                                           required=""
                                           type="radio"
                                           name="payment_option"
                                           id="exampleRadios5" checked=""/>
                                    <label className="form-check-label"
                                           htmlFor="exampleRadios5"
                                           data-bs-toggle="collapse"
                                           data-target="#paypal"
                                           aria-controls="paypal">Online
                                        Getway</label>
                                </div>
                            </div>
                            <div className="payment-logo d-flex" id="payment">
                                <img className="mr-15"
                                     src="assets/imgs/theme/icons/payment-paypal.svg"
                                     alt=""/>
                                <img className="mr-15"
                                     src="assets/imgs/theme/icons/payment-visa.svg"
                                     alt=""/>
                                <img className="mr-15"
                                     src="assets/imgs/theme/icons/payment-master.svg"
                                     alt=""/>
                                <img
                                    src="assets/imgs/theme/icons/payment-zapper.svg"
                                    alt=""/>
                            </div>

                            <a href="#"
                               onClick={checkoutSubmitHandler}
                               className="btn btn-fill-out mt-30">Place
                                an
                                Order<i
                                    className="fi-rs-sign-out ml-15"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;