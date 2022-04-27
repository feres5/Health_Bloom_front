import "../../assets/css/plugins/animate.min.css";
import "../../assets/css/main.scoped.css";
import React from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import QuickCartItem from "./cart/QuickCartItem";
import cartData from "./cart/CartData";
import {useCart} from "react-use-cart";
import jwt_decode from "jwt-decode";

const ShopHeader = () => {

    const token = localStorage.getItem("user_info");
    let wishlist = localStorage.getItem("wishlist");

    let products = []
    let signInOut;
    if (token) {

        const decodedTOKEN = jwt_decode(token, {payload: true});
        if (wishlist) {
            wishlist = JSON.parse(wishlist);
             wishlist.map((item) => {
                if (item.userId === decodedTOKEN.user_id) {
                    products = item.products;
                }
            });
            console.log(products);
        }
    } else {
        products = [];
    }

    const history = useHistory();
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user_info");
        history.replace("/shop");
    };

    signInOut = token ?
        (
            <a href="/shop/home" onClick={logOut}><i
                className="fi fi-rs-sign-out mr-10"></i>Sign
                out</a>
        ) :
        (
            <a href="/login-page"><i
                className="fi fi-rs-sign-in mr-10"></i>Sign
                in</a>
        )


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
    } = useCart();


    const {path, url} = useRouteMatch();

    return (
        <header className="header-area header-style-1 header-height-2">
            <div className="mobile-promotion">
                <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
            </div>
            <div className="header-top header-top-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info">
                                <ul>
                                    <li>
                                        <a className="language-dropdown-active"
                                           href="#">English <i
                                            className="fi-rs-angle-small-down"></i></a>
                                        <ul className="language-dropdown">
                                            <li>
                                                <a href="#"><img
                                                    src="assets/imgs/theme/flag-fr.png"
                                                    alt=""/>Français</a>
                                            </li>
                                            <li>
                                                <a href="#"><img
                                                    src="assets/imgs/theme/flag-dt.png"
                                                    alt=""/>Deutsch</a>
                                            </li>
                                            <li>
                                                <a href="#"><img
                                                    src="assets/imgs/theme/flag-ru.png"
                                                    alt=""/>Pусский</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div
                className="header-middle header-middle-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="header-wrap">
                        <div className="d-inline-block">
                            <a href="/index"><img
                                style={{marginRight: '40px'}}
                                src={require("assets/img/logoNav1.png").default}
                                width="70"
                                alt="logo"/></a>
                        </div>
                        <div className="header-right">
                            <div className="search-style-2">
                                <form action="#">
                                    <select className="select-active">
                                        <option>All Categories</option>
                                        <option>Milks and Dairies</option>
                                        <option>Wines & Alcohol</option>
                                        <option>Clothing & Beauty</option>
                                        <option>Pet Foods & Toy</option>
                                        <option>Fast food</option>
                                        <option>Baking material</option>
                                        <option>Vegetables</option>
                                        <option>Fresh Seafood</option>
                                        <option>Noodles & Rice</option>
                                        <option>Ice cream</option>
                                    </select>
                                    <input type="text"
                                           placeholder="Search ..."/>
                                </form>
                            </div>
                            <div className="header-action-right">
                                <div className="header-action-2">
                                    <div className="search-location">
                                        <form action="#">
                                            <select
                                                className="select-active">
                                                <option>Your Location
                                                </option>
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>Arizona</option>
                                                <option>Delaware</option>
                                                <option>Florida</option>
                                                <option>Georgia</option>
                                                <option>Hawaii</option>
                                                <option>Indiana</option>
                                                <option>Maryland</option>
                                                <option>Nevada</option>
                                                <option>New Jersey</option>
                                                <option>New Mexico</option>
                                                <option>New York</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className="header-action-icon-2">
                                        <a href={`${path}/wishlist`}>
                                            <img className="svgInject"
                                                 alt="Nest"
                                                 src="assets/imgs/theme/icons/icon-heart.svg"/>
                                            <span
                                                className="pro-count blue">{products.length}</span>
                                        </a>
                                        <a href={`${path}/wishlist`}><span
                                            className="lable">Wishlist</span></a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon"
                                           href={`${path}/cart`}>
                                            <img alt="Nest"
                                                 src="assets/imgs/theme/icons/icon-cart.svg"/>
                                            <span
                                                className="pro-count blue">{totalUniqueItems}</span>
                                        </a>
                                        <a href={`${path}/cart`}><span
                                            className="lable">Cart</span></a>
                                        <div
                                            className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                {items.map((item, index) => {
                                                    return (
                                                        <QuickCartItem
                                                            image={item.image}
                                                            name={item.name}
                                                            quantity={item.quantity}
                                                            price={item.price}
                                                            key={index}
                                                            item={item}
                                                            id={item.id}
                                                            onRemove={removeItem}
                                                        />
                                                    );
                                                })}
                                            </ul>
                                            <div
                                                className="shopping-cart-footer">
                                                <div
                                                    className="shopping-cart-total">
                                                    <h4>Total <span>${cartTotal}</span>
                                                    </h4>
                                                </div>
                                                <div
                                                    className="shopping-cart-button">
                                                    <a href={`${path}/cart`}
                                                       className="outline">View
                                                        cart</a>
                                                    <a href={`${path}/checkout`}>Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a href="page-account.html">
                                            <img className="svgInject"
                                                 alt="Nest"
                                                 src="assets/imgs/theme/icons/icon-user.svg"/>
                                        </a>
                                        <a href="page-account.html"><span
                                            className="lable ml-0">Account</span></a>
                                        <div
                                            className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                            <ul>
                                                <li>
                                                    <a href="page-account.html"><i
                                                        className="fi fi-rs-user mr-10"></i>My
                                                        Account</a>
                                                </li>
                                                <li>
                                                    <a href="page-account.html"><i
                                                        className="fi fi-rs-location-alt mr-10"></i>Order
                                                        Tracking</a>
                                                </li>
                                                <li>
                                                    <a href="page-account.html"><i
                                                        className="fi fi-rs-label mr-10"></i>My
                                                        Voucher</a>
                                                </li>
                                                <li>
                                                    <a href={`${path}/cart`}><i
                                                        className="fi fi-rs-heart mr-10"></i>My
                                                        Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="page-account.html"><i
                                                        className="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                                                </li>
                                                <li>
                                                    {signInOut}
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
            <div
                className="header-bottom header-bottom-bg-color sticky-bar">
                <div className="container">
                    <div
                        className="header-wrap header-space-between position-relative">
                        <div
                            className="logo logo-width-1 d-block d-lg-none">
                            <a href="index.html"><img
                                src="assets/imgs/theme/logo.svg"
                                alt="logo"/></a>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                            <div
                                className="main-categori-wrap d-none d-lg-block">
                                <a className="categories-button-active"
                                   href="#">
                                    <span className="fi-rs-apps"></span>
                                    <span
                                        className="et">Browse</span> All
                                    Categories
                                    <i className="fi-rs-angle-down"></i>
                                </a>
                                <div
                                    className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                    <div
                                        className="d-flex categori-dropdown-inner">
                                        <ul>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-1.svg"
                                                        alt=""/>Milks and
                                                    Dairies</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-2.svg"
                                                        alt=""/>Clothing &
                                                    beauty</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-3.svg"
                                                        alt=""/>Pet Foods &
                                                    Toy</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-4.svg"
                                                        alt=""/>Baking
                                                    material</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-5.svg"
                                                        alt=""/>Fresh Fruit</a>
                                            </li>
                                        </ul>
                                        <ul className="end">
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-6.svg"
                                                        alt=""/>Wines &
                                                    Drinks</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-7.svg"
                                                        alt=""/>Fresh
                                                    Seafood</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-8.svg"
                                                        alt=""/>Fast
                                                    food</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-9.svg"
                                                        alt=""/>Vegetables</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">
                                                    <img
                                                        src="assets/imgs/theme/icons/category-10.svg"
                                                        alt=""/>Bread and
                                                    Juice</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="more_slide_open"
                                         style={{display: "none"}}>
                                        <div
                                            className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        <img
                                                            src="assets/imgs/theme/icons/icon-1.svg"
                                                            alt=""/>Milks
                                                        and
                                                        Dairies</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        <img
                                                            src="assets/imgs/theme/icons/icon-2.svg"
                                                            alt=""/>Clothing
                                                        &
                                                        beauty</a>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        <img
                                                            src="assets/imgs/theme/icons/icon-3.svg"
                                                            alt=""/>Wines &
                                                        Drinks</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        <img
                                                            src="assets/imgs/theme/icons/icon-4.svg"
                                                            alt=""/>Fresh
                                                        Seafood</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="more_categories"><span
                                        className="icon"></span> <span
                                        className="heading-sm-1">Show more...</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                <nav>
                                    <ul>
                                        <li className="hot-deals"><img
                                            src="assets/imgs/theme/icons/icon-hot.svg"
                                            alt="hot deals"/><a
                                            href="shop-grid-right.html">Hot
                                            Deals</a></li>
                                        <li>
                                            <a href="/shop">Home</a>
                                        </li>
                                        <li>
                                            <a href="/shop/products">Products</a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="hotline d-none d-lg-flex">
                            <img
                                src="assets/imgs/theme/icons/icon-headphone.svg"
                                alt="hotline"/>
                            <p>HealthBloom <span>24/7 Support Center</span>
                            </p>
                        </div>
                        <div
                            className="header-action-icon-2 d-block d-lg-none">
                            <div className="burger-icon burger-icon-white">
                                <span className="burger-icon-top"></span>
                                <span className="burger-icon-mid"></span>
                                <span className="burger-icon-bottom"></span>
                            </div>
                        </div>
                        <div
                            className="header-action-right d-block d-lg-none">
                            <div className="header-action-2">
                                <div className="header-action-icon-2">
                                    <a href={`${path}/cart`}>
                                        <img alt="Nest"
                                             src="assets/imgs/theme/icons/icon-heart.svg"/>
                                        <span
                                            className="pro-count white">4</span>
                                    </a>
                                </div>
                                <div className="header-action-icon-2">
                                    <a className="mini-cart-icon" href="#">
                                        <img alt="Nest"
                                             src="assets/imgs/theme/icons/icon-cart.svg"/>
                                        <span
                                            className="pro-count white">2</span>
                                    </a>
                                    <div
                                        className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div
                                                    className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img
                                                        alt="Nest"
                                                        src="assets/imgs/shop/thumbnail-3.jpg"/></a>
                                                </div>
                                                <div
                                                    className="shopping-cart-title">
                                                    <h4><a
                                                        href="shop-product-right.html">Plain
                                                        Striola Shirts</a>
                                                    </h4>
                                                    <h3><span>1 × </span>$800.00
                                                    </h3>
                                                </div>
                                                <div
                                                    className="shopping-cart-delete">
                                                    <a href="#"><i
                                                        className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img
                                                        alt="Nest"
                                                        src="assets/imgs/shop/thumbnail-4.jpg"/></a>
                                                </div>
                                                <div
                                                    className="shopping-cart-title">
                                                    <h4><a
                                                        href="shop-product-right.html">Macbook
                                                        Pro 2022</a></h4>
                                                    <h3><span>1 × </span>$3500.00
                                                    </h3>
                                                </div>
                                                <div
                                                    className="shopping-cart-delete">
                                                    <a href="#"><i
                                                        className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div
                                            className="shopping-cart-footer">
                                            <div
                                                className="shopping-cart-total">
                                                <h4>Total <span>$383.00</span>
                                                </h4>
                                            </div>
                                            <div
                                                className="shopping-cart-button">
                                                <a href="shop-cart.html">View
                                                    cart</a>
                                                <a href="shop-checkout.html">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ShopHeader;