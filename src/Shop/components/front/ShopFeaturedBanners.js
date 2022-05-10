import "../../assets/css/plugins/animate.min.css";
import "../../assets/css/main.scoped.css";
import React from "react";

const shopFeaturedBanners = () => {

    return (
        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="banner-img wow animate__animated animate__fadeInUp"
                            data-wow-delay="0">
                            <img src="assets/imgs/banner/banner-1.png"
                                 alt=""/>
                            <div className="banner-text">
                                <h4>
                                    Everyday Fresh & <br/>Clean with
                                    Our<br/>
                                    Products
                                </h4>
                                <a href="shop-grid-right.html"
                                   className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="banner-img wow animate__animated animate__fadeInUp"
                            data-wow-delay=".2s">
                            <img src="assets/imgs/banner/banner-2.png"
                                 alt=""/>
                            <div className="banner-text">
                                <h4>
                                    Make your Breakfast<br/>
                                    Healthy and Easy
                                </h4>
                                <a href="shop-grid-right.html"
                                   className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-md-none d-lg-flex">
                        <div
                            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                            data-wow-delay=".4s">
                            <img src="assets/imgs/banner/banner-3.png"
                                 alt=""/>
                            <div className="banner-text">
                                <h4>The best Organic <br/>Products
                                    Online
                                </h4>
                                <a href="shop-grid-right.html"
                                   className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default shopFeaturedBanners;