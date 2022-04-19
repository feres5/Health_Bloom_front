import "../../assets/css/plugins/animate.min.css";
import "../../assets/css/main.scoped.css";
import React from "react";

const ShopFooter = () => {

    return (

        <footer>
            <div
                className="container pb-30 wow animate__animated animate__fadeInUp"
                data-wow-delay="0">
                <div className="row align-items-center">
                    <div className="col-12 mb-30">
                        <div className="footer-bottom"></div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <p className="font-sm mb-0">&copy; 2022, <strong
                            className="text-brand">Binary Brains</strong> <br/>All rights reserved</p>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                        <div className="hotline d-lg-inline-flex mr-30">
                            <img
                                src="assets/imgs/theme/icons/phone-call.svg"
                                alt="hotline"/>
                            <p>HealthBloom<span>Working 8:00 - 22:00</span>
                            </p>
                        </div>
                        <div className="hotline d-lg-inline-flex">
                            <img
                                src="assets/imgs/theme/icons/phone-call.svg"
                                alt="hotline"/>
                            <p>28323890<span>24/7 Support Center</span>
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                        <div className="mobile-social-icon">
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
                        <p className="font-sm">Up to 15% discount on your
                            first subscribe</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ShopFooter;