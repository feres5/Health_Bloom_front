import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";

import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useHttpClient} from "../../../../shared/hooks/http-hook";
import {useCart} from "react-use-cart";


const Invoice = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedPayments, setLoadedPayments] = useState([]);
    const [invoiceDetails, setInvoiceDetails] = useState({});
    const [isloaded, setIsLoaded] = useState(true);
    const search = useLocation().search;
    const sessionId = new URLSearchParams(search).get('session_id');


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
    } = useCart();
    useEffect(() => {

        emptyCart();
        const fecthPayments = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3002/api/products/checkout/${sessionId}`);

                setLoadedPayments(responseData.items);
                const {
                    amount_total,
                    expires_at,
                    customer_details
                } = responseData.session
                const createdAt = new Date(0)
                createdAt.setUTCSeconds(expires_at);
                createdAt.setDate(createdAt.getDate() - 1);


                setInvoiceDetails({
                    total: amount_total,
                    createdAt: createdAt.toDateString(),
                    customer_details
                });
                setIsLoaded(false);
                console.log(responseData);
            } catch (e) {
                console.log(e);
            }

        };
        fecthPayments();

    }, [sendRequest, sessionId]);


    return (
        <>
            {!isloaded && invoiceDetails &&
                <div className="invoice invoice-content invoice-1">
                    <div className="back-top-home hover-up mt-30 ml-30">
                        <a className="hover-up" href="shop/products"><i
                            className="fi-rs-home mr-5"></i> Homepage</a>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="invoice-inner">
                                    <div className="invoice-info"
                                         id="invoice_wrapper">
                                        <div className="invoice-header">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div
                                                        className="invoice-name">
                                                        <div className="logo">
                                                            <a href="index.html"><img
                                                                style={{
                                                                    width: '150px',
                                                                    height: '150px'
                                                                }}
                                                                src={require("../../../../assets/img/logoNav.png").default}
                                                                alt="logo"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div
                                                        className="invoice-numb">
                                                        <h6 className="text-end mb-10 mt-20">Date:  {invoiceDetails.createdAt}</h6>
                                                        <h6 className="text-end invoice-header-1">Invoice
                                                            No:
                                                            #IVSF1970191</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-top">
                                            <div className="row">
                                                <div
                                                    className="col-lg-9 col-md-6">
                                                    <div
                                                        className="invoice-number">
                                                        <h4 className="invoice-title-1 mb-10">Receipt
                                                            To</h4>
                                                        <p className="invoice-addr-1">
                                                            <strong>{invoiceDetails.customer_details.name}
                                                            </strong> <br/>
                                                            {invoiceDetails.customer_details.email}
                                                            <br/>
                                                            {invoiceDetails.customer_details.address.line1}
                                                            {invoiceDetails.customer_details.address.line1}
                                                            , <br/>Tunisia
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row mt-2">
                                                <div
                                                    className="col-lg-9 col-md-6">
                                                    <h4 className="invoice-title-1 mb-10">Due
                                                        Date:</h4>
                                                    <p className="invoice-from-1">{invoiceDetails.createdAt}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="invoice-center">
                                            <div className="table-responsive">
                                                <table
                                                    className="table table-striped invoice-table">
                                                    <thead
                                                        className="bg-active">
                                                    <tr>
                                                        <th>Item name</th>
                                                        <th className="text-center">Unit
                                                            Price
                                                        </th>
                                                        <th className="text-center">Quantity</th>
                                                        <th className="text-right">Amount</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {loadedPayments.map((item) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        className="item-desc-1">
                                                                        <span>{item.description}</span>
                                                                        <small>SKU: {item.price.product}</small>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">${item.price.unit_amount / 100}</td>
                                                                <td className="text-center">{item.quantity}</td>
                                                                <td className="text-right">${item.price.unit_amount / 100 * item.quantity}</td>
                                                            </tr>
                                                        );
                                                    })}

                                                    <tr>
                                                        <td colSpan="3"
                                                            className="text-end f-w-600">
                                                        </td>
                                                        <td className="text-right"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3"
                                                            className="text-end f-w-600">
                                                        </td>
                                                        <td className="text-right"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3"
                                                            className="text-end f-w-600">Grand
                                                            Total
                                                        </td>
                                                        <td className="text-right f-w-600">${invoiceDetails.total / 100}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="invoice-bottom">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div>
                                                        <h3 className="invoice-title-1">Important
                                                            Note</h3>
                                                        <ul className="important-notes-list-1">
                                                            <li>All amounts
                                                                shown on
                                                                this invoice are
                                                                in
                                                                US
                                                                dollars
                                                            </li>
                                                            <li>finance charge
                                                                of
                                                                1.5%
                                                                will be made on
                                                                unpaid
                                                                balances after
                                                                30
                                                                days.
                                                            </li>
                                                            <li>Once order done,
                                                                money
                                                                can't refund
                                                            </li>
                                                            <li>Delivery might
                                                                delay
                                                                due
                                                                to some external
                                                                dependency
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-sm-6 col-offsite">
                                                    <div className="text-end">
                                                        <p className="mb-0 text-13">Thank
                                                            you for your
                                                            business</p>
                                                        <p>
                                                            <strong>{invoiceDetails.customer_details.name}
                                                                JSC</strong></p>
                                                        <div
                                                            className="mobile-social-icon mt-50 print-hide">
                                                            <h6>Follow Us</h6>
                                                            <a href="#"><img
                                                                src="assets/imgs/theme/icons/icon-facebook-white.svg"
                                                                alt=""/></a>
                                                            <a href="#"><img
                                                                src="assets/imgs/theme/icons/icon-twitter-white.svg"
                                                                alt=""/></a>
                                                            <a href="#"><img
                                                                src="assets/imgs/theme/icons/icon-instagram-white.svg"
                                                                alt=""/></a>
                                                            <a href="#"><img
                                                                src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                                                                alt=""/></a>
                                                            <a href="#"><img
                                                                src="assets/imgs/theme/icons/icon-youtube-white.svg"
                                                                alt=""/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="invoice-btn-section clearfix d-print-none">
                                        <a href="javascript:window.print()"
                                           className="btn btn-lg btn-custom btn-print hover-up">
                                            <img
                                                src="assets/imgs/theme/icons/icon-print.svg"
                                                alt=""/> Print </a>
                                        <a id="invoice_download_btn" href="/shop/products"
                                           className="btn btn-lg btn-custom btn-download hover-up">
                                            <img
                                                src="assets/imgs/theme/icons/icon-download.svg"
                                                alt=""/> Back to Home </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Invoice;