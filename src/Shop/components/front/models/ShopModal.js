import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import React from "react";

const ShopModal = () => {

    return (
        <div className="modal fade custom-modal" id="onloadModal"
             aria-labelledby="onloadModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    <div className="modal-body">
                        <div className="deal"
                             style={{backgroundImage: "url('assets/imgs/banner/popup-1.png')"}}>
                            <div className="deal-top">
                                <h6 className="mb-10 text-brand-2">Deal of
                                    the
                                    Day</h6>
                            </div>
                            <div className="deal-content detail-info">
                                <h4 className="product-title"><a
                                    href="shop-product-right.html"
                                    className="text-heading">Supplements for Holistic Health</a></h4>
                                <div
                                    className="clearfix product-price-cover">
                                    <div
                                        className="product-price primary-color float-left">
                                        <span
                                            className="current-price text-brand">$38</span>
                                        <span>
                                            <span
                                                className="save-price font-md color3 ml-15">26% Off</span>
                                            <span
                                                className="old-price font-md ml-15">$52</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="deal-bottom">
                                <p className="mb-20">Hurry Up! Offer End
                                    In:</p>
                                <div className="deals-countdown pl-5"
                                     data-countdown="2025/03/25 00:00:00">
                                    <span className="countdown-section"><span
                                        className="countdown-amount hover-up">03</span><span
                                        className="countdown-period"> days </span></span><span
                                    className="countdown-section"><span
                                    className="countdown-amount hover-up">02</span><span
                                    className="countdown-period"> hours </span></span><span
                                    className="countdown-section"><span
                                    className="countdown-amount hover-up">43</span><span
                                    className="countdown-period"> mins </span></span><span
                                    className="countdown-section"><span
                                    className="countdown-amount hover-up">29</span><span
                                    className="countdown-period"> sec </span></span>
                                </div>
                                <div className="product-detail-rating">
                                    <div
                                        className="product-rate-cover text-end">
                                        <div
                                            className="product-rate d-inline-block">
                                            <div className="product-rating"
                                                 style={{width: "90 %"}}></div>
                                        </div>
                                        <span
                                            className="font-small ml-5 text-muted"> (32 rates)</span>
                                    </div>
                                </div>
                                <a href="shop-grid-right.html"
                                   className="btn hover-up">Shop Now <i
                                    className="fi-rs-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ShopModal;