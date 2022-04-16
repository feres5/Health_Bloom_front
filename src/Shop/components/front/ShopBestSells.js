import React from "react";

const shopBestSells = () => {

    return (
        <section className="section-padding pb-5">
            <div className="container">
                <div
                    className="section-title wow animate__animated animate__fadeIn">
                    <h3 className="">Daily Best Sells</h3>
                    <ul className="nav nav-tabs links" id="myTab-2"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active"
                                    id="nav-tab-one-1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-one-1"
                                    type="button" role="tab"
                                    aria-controls="tab-one"
                                    aria-selected="true">Featured
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link"
                                    id="nav-tab-two-1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-two-1"
                                    type="button" role="tab"
                                    aria-controls="tab-two"
                                    aria-selected="false">Popular
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link"
                                    id="nav-tab-three-1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-three-1"
                                    type="button" role="tab"
                                    aria-controls="tab-three"
                                    aria-selected="false">New added
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div
                        className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                        <div className="banner-img style-2">
                            <div className="banner-text">
                                <h2 className="mb-100">Bring nature into
                                    your
                                    home</h2>
                                <a href="shop-grid-right.html"
                                   className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn"
                        data-wow-delay=".4s">
                        <div className="tab-content"
                             id="myTabContent-1">
                            <div className="tab-pane fade show active"
                                 id="tab-one-1" role="tabpanel"
                                 aria-labelledby="tab-one-1">
                                <div
                                    className="carausel-4-columns-cover arrow-center position-relative">
                                    <div
                                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                        id="carausel-4-columns-arrows"></div>
                                    <div
                                        className="carausel-4-columns carausel-arrow-center"
                                        id="carausel-4-columns">
                                        <div
                                            className="product-cart-wrap">
                                            <div
                                                className="product-img-action-wrap">
                                                <div
                                                    className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img
                                                            className="default-img"
                                                            src="assets/imgs/shop/product-1-1.jpg"
                                                            alt=""/>
                                                        <img
                                                            className="hover-img"
                                                            src="assets/imgs/shop/product-1-2.jpg"
                                                            alt=""/>
                                                    </a>
                                                </div>
                                                <div
                                                    className="product-action-1">
                                                    <a aria-label="Quick view"
                                                       className="action-btn small hover-up"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#quickViewModal">
                                                        <i className="fi-rs-eye"></i></a>
                                                    <a aria-label="Add To Wishlist"
                                                       className="action-btn small hover-up"
                                                       href="shop-wishlist.html"><i
                                                        className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare"
                                                       className="action-btn small hover-up"
                                                       href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                </div>
                                                <div
                                                    className="product-badges product-badges-position product-badges-mrg">
                                                    <span
                                                        className="hot">Save 15%</span>
                                                </div>
                                            </div>
                                            <div
                                                className="product-content-wrap">
                                                <div
                                                    className="product-category">
                                                    <a href="shop-grid-right.html">Hodo
                                                        Foods</a>
                                                </div>
                                                <h2><a
                                                    href="shop-product-right.html">Seeds
                                                    of Change Organic
                                                    Quinoa, Brown</a>
                                                </h2>
                                                <div
                                                    className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{width: "80%"}}></div>
                                                </div>
                                                <div
                                                    className="product-price mt-10">
                                                    <span>$238.85 </span>
                                                    <span
                                                        className="old-price">$245.8</span>
                                                </div>
                                                <div
                                                    className="sold mt-15 mb-15">
                                                    <div
                                                        className="progress mb-5">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{width: "80%"}}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                    <span
                                                        className="font-xs text-heading"> Sold: 90/120</span>
                                                </div>
                                                <a href="shop-cart.html"
                                                   className="btn w-100 hover-up"><i
                                                    className="fi-rs-shopping-cart mr-5"></i>Add
                                                    To Cart</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade"
                                 id="tab-two-1"
                                 role="tabpanel"
                                 aria-labelledby="tab-two-1">
                                <div
                                    className="carausel-4-columns-cover arrow-center position-relative">
                                    <div
                                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                        id="carausel-4-columns-2-arrows"></div>
                                    <div
                                        className="carausel-4-columns carausel-arrow-center"
                                        id="carausel-4-columns-2">
                                        <div
                                            className="product-cart-wrap">
                                            <div
                                                className="product-img-action-wrap">
                                                <div
                                                    className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img
                                                            className="default-img"
                                                            src="assets/imgs/shop/product-10-1.jpg"
                                                            alt=""/>
                                                        <img
                                                            className="hover-img"
                                                            src="assets/imgs/shop/product-10-2.jpg"
                                                            alt=""/>
                                                    </a>
                                                </div>
                                                <div
                                                    className="product-action-1">
                                                    <a aria-label="Quick view"
                                                       className="action-btn small hover-up"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#quickViewModal">
                                                        <i className="fi-rs-eye"></i></a>
                                                    <a aria-label="Add To Wishlist"
                                                       className="action-btn small hover-up"
                                                       href="shop-wishlist.html"><i
                                                        className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare"
                                                       className="action-btn small hover-up"
                                                       href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                </div>
                                                <div
                                                    className="product-badges product-badges-position product-badges-mrg">
                                                    <span
                                                        className="hot">Save 15%</span>
                                                </div>
                                            </div>
                                            <div
                                                className="product-content-wrap">
                                                <div
                                                    className="product-category">
                                                    <a href="shop-grid-right.html">Hodo
                                                        Foods</a>
                                                </div>
                                                <h2><a
                                                    href="shop-product-right.html">Canada
                                                    Dry Ginger Ale – 2 L
                                                    Bottle</a></h2>
                                                <div
                                                    className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{width: "80%"}}></div>
                                                </div>
                                                <div
                                                    className="product-price mt-10">
                                                    <span>$238.85 </span>
                                                    <span
                                                        className="old-price">$245.8</span>
                                                </div>
                                                <div
                                                    className="sold mt-15 mb-15">
                                                    <div
                                                        className="progress mb-5">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{width: "80%"}}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                    <span
                                                        className="font-xs text-heading"> Sold: 90/120</span>
                                                </div>
                                                <a href="shop-cart.html"
                                                   className="btn w-100 hover-up"><i
                                                    className="fi-rs-shopping-cart mr-5"></i>Add
                                                    To Cart</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade"
                                 id="tab-three-1"
                                 role="tabpanel"
                                 aria-labelledby="tab-three-1">
                                <div
                                    className="carausel-4-columns-cover arrow-center position-relative">
                                    <div
                                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                        id="carausel-4-columns-3-arrows"></div>
                                    <div
                                        className="carausel-4-columns carausel-arrow-center"
                                        id="carausel-4-columns-3">
                                        <div
                                            className="product-cart-wrap">
                                            <div
                                                className="product-img-action-wrap">
                                                <div
                                                    className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img
                                                            className="default-img"
                                                            src="assets/imgs/shop/product-7-1.jpg"
                                                            alt=""/>
                                                        <img
                                                            className="hover-img"
                                                            src="assets/imgs/shop/product-7-2.jpg"
                                                            alt=""/>
                                                    </a>
                                                </div>
                                                <div
                                                    className="product-action-1">
                                                    <a aria-label="Quick view"
                                                       className="action-btn small hover-up"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#quickViewModal">
                                                        <i className="fi-rs-eye"></i></a>
                                                    <a aria-label="Add To Wishlist"
                                                       className="action-btn small hover-up"
                                                       href="shop-wishlist.html"><i
                                                        className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare"
                                                       className="action-btn small hover-up"
                                                       href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                </div>
                                                <div
                                                    className="product-badges product-badges-position product-badges-mrg">
                                                    <span
                                                        className="hot">Save 15%</span>
                                                </div>
                                            </div>
                                            <div
                                                className="product-content-wrap">
                                                <div
                                                    className="product-category">
                                                    <a href="shop-grid-right.html">Hodo
                                                        Foods</a>
                                                </div>
                                                <h2><a
                                                    href="shop-product-right.html">Perdue
                                                    Simply Smart
                                                    Organics
                                                    Gluten Free</a></h2>
                                                <div
                                                    className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{width: "80%"}}></div>
                                                </div>
                                                <div
                                                    className="product-price mt-10">
                                                    <span>$238.85 </span>
                                                    <span
                                                        className="old-price">$245.8</span>
                                                </div>
                                                <div
                                                    className="sold mt-15 mb-15">
                                                    <div
                                                        className="progress mb-5">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{width: "80%"}}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                    <span
                                                        className="font-xs text-heading"> Sold: 90/120</span>
                                                </div>
                                                <a href="shop-cart.html"
                                                   className="btn w-100 hover-up"><i
                                                    className="fi-rs-shopping-cart mr-5"></i>Add
                                                    To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default shopBestSells;