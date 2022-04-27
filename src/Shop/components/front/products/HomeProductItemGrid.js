import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {useCart} from "react-use-cart";

const ShopProductsItemGrid = props => {

    const {path, url} = useRouteMatch();
    const {addItem} = useCart();
    return (
        <div className="product-cart-wrap">
            <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                    <div className="product-img-inner">
                        <Link exact="true" to={`${path}/${props.id}`}>
                            <img className="default-img"
                                 src={`http://localhost:3002/${props.image}`}
                                 alt=""/>
                            <img className="hover-img"
                                 src={`http://localhost:3002/${props.image}`}
                                 alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="product-action-1">
                    <a aria-label="Add To Wishlist" className="action-btn"
                       href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                    <a aria-label="Compare" className="action-btn"
                       href="shop-compare.html"><i
                        className="fi-rs-shuffle"></i></a>
                    <a aria-label="Quick view" className="action-btn"
                       data-bs-toggle="modal"
                       data-bs-target="#quickViewModal"><i
                        className="fi-rs-eye"></i></a>
                </div>
                <div
                    className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                </div>
            </div>
            <div className="product-content-wrap">
                <div className="product-category">
                    <a href={`${path}/${props.id}`}>Hodo Foods</a>
                </div>
                <h2><a href={`${path}/${props.id}`}>{props.name}</a></h2>
                <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                        <div className="product-rating"
                             style={{width: "90%"}}></div>
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                    <span className="ml-30">500g</span>
                </div>
                <p className="mt-15 mb-15">{props.description}</p>

                <div className="product-price">
                    <span>${props.price}</span>
                    <span className="old-price">$245.8</span>
                </div>

                <div className="mt-30 d-flex align-items-center">
                    <a aria-label="Buy now" className="btn"
                       href="shop-cart.html"
                       onClick={(e) => {
                           e.preventDefault()
                           addItem(props.item)
                       }}
                    ><i
                        className="fi-rs-shopping-cart mr-5"></i>Add to Cart</a>
                    <a href="#"
                       className="add-wishlish ml-30 text-body font-sm font-heading font-weight-bold"><i
                        className="fi-rs-shuffle mr-5"></i>Add Compare</a>
                </div>
            </div>
        </div>
    );
};

export default ShopProductsItemGrid;