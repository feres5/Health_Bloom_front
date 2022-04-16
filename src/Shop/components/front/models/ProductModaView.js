import React from "react";

const ProductModalView = () => {

    return (
        <div className="modal fade custom-modal" id="quickViewModal"
             tabIndex="-1"
             aria-labelledby="quickViewModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    <div className="modal-body">
                        <div className="row">
                            <div
                                className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div className="detail-gallery">
                                    <span className="zoom-icon"><i
                                        className="fi-rs-search"></i></span>

                                    <div className="product-image-slider">
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-2.jpg"
                                                alt="product image"/>
                                        </figure>
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-1.jpg"
                                                alt="product image"/>
                                        </figure>
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-3.jpg"
                                                alt="product image"/>
                                        </figure>
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-4.jpg"
                                                alt="product image"/>
                                        </figure>
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-5.jpg"
                                                alt="product image"/>
                                        </figure>
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-6.jpg"
                                                alt="product image"/>
                                        </figure>
                                        <figure
                                            className="border-radius-10">
                                            <img
                                                src="assets/imgs/shop/product-16-7.jpg"
                                                alt="product image"/>
                                        </figure>
                                    </div>

                                    <div className="slider-nav-thumbnails">
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-3.jpg"
                                            alt="product image"/></div>
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-4.jpg"
                                            alt="product image"/></div>
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-5.jpg"
                                            alt="product image"/></div>
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-6.jpg"
                                            alt="product image"/></div>
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-7.jpg"
                                            alt="product image"/></div>
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-8.jpg"
                                            alt="product image"/></div>
                                        <div><img
                                            src="assets/imgs/shop/thumbnail-9.jpg"
                                            alt="product image"/></div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-sm-12 col-xs-12">
                                    <div
                                        className="detail-info pr-30 pl-30">
                                <span
                                    className="stock-status out-stock"> Sale Off </span>
                                        <h3 className="title-detail"><a
                                            href="shop-product-right.html"
                                            className="text-heading">Seeds
                                            of
                                            Change
                                            Organic Quinoa, Brown</a></h3>
                                        <div
                                            className="product-detail-rating">
                                            <div
                                                className="product-rate-cover text-end">
                                                <div
                                                    className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{width: "90 %"}}></div>
                                                </div>
                                                <span
                                                    className="font-small ml-5 text-muted"> (32 reviews)</span>
                                            </div>
                                        </div>
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
                                        <div
                                            className="detail-extralink mb-30">
                                            <div
                                                className="detail-qty border radius">
                                                <a href="#"
                                                   className="qty-down"><i
                                                    className="fi-rs-angle-small-down"></i></a>
                                                <span
                                                    className="qty-val">1</span>
                                                <a href="#"
                                                   className="qty-up"><i
                                                    className="fi-rs-angle-small-up"></i></a>
                                            </div>
                                            <div
                                                className="product-extra-link2">
                                                <button type="submit"
                                                        className="button button-add-to-cart">
                                                    <i className="fi-rs-shopping-cart"></i>Add
                                                    to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="font-xs">
                                            <ul>
                                                <li className="mb-5">Vendor: <span
                                                    className="text-brand">Nest</span>
                                                </li>
                                                <li className="mb-5">MFG:<span
                                                    className="text-brand"> Jun 4.2021</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModalView;