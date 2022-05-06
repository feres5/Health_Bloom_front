import React, {useEffect} from "react";

import jquery from 'jquery';
import useScript from "../hooks/useScript";


import "./assets/css/plugins/animate.min.css";
import "./assets/css/main.scoped.css";
import "./home.css";

import ShopModal from "./components/front/models/ShopModal";
import ProductModalView from "./components/front/models/ProductModaView";
import ShopHeader from "./components/front/ShopHeader";
import ShopBanner from "./components/front/ShopBanner";
import ShopFeaturedCategories from "./components/front/ShopFeaturedCategories";
import ShopFeaturedBanners from "./components/front/ShopFeaturedBanners";
import HomeProductsList from "./components/front/products/HomeProductsList";
import ShopBestSells from "./components/front/ShopBestSells";
import ShopDeals from "./components/front/ShopDeals";
import ShopTopProducts from "./components/front/ShopTopProducts";
import ShopFooter from "./components/front/ShopFooter";
import Cart from "./components/front/cart/Cart";

import {Navigate ,Routes, Route, useLocation } from "react-router-dom";
import {Switch} from "react-router";
import Shop404Page from "./components/front/Shop404Page";
import ProductDetails from "./pages/front/ProductDetails";
import ShopProducts from "./components/front/products/ShopProducts";
import Checkout from "./components/front/cart/Checkout";
import Invoice from "./components/front/cart/Invoice";
import WishList from "./components/front/cart/WishList";
import jwt_decode from "jwt-decode";
import Index from "../views/Index";

window.$ = window.jQuery = jquery;
const HomeShop = () => {
    const {path, url} = useLocation();


    useScript('assets/js/vendor/modernizr-3.6.0.min.js')
    useScript('assets/js/plugins/slick.js')
    useScript('assets/js/plugins/waypoints.js')
    useScript('assets/js/plugins/wow.js')
    useScript('assets/js/plugins/perfect-scrollbar.js')
    useScript('assets/js/plugins/magnific-popup.js')
    useScript('assets/js/plugins/select2.min.js')
    useScript('assets/js/plugins/counterup.js')
    useScript('assets/js/plugins/jquery.countdown.min.js')
    useScript('assets/js/plugins/images-loaded.js')
    useScript('assets/js/plugins/jquery.countdown.min.js')
    useScript('assets/js/plugins/isotope.js')
    useScript('assets/js/plugins/scrollup.js')
    useScript('assets/js/plugins/jquery.vticker-min.js')
    useScript('assets/js/plugins/jquery.theia.sticky.js')
    useScript('assets/js/plugins/jquery.elevatezoom.js')
    useScript('assets/js/main.js?v=4.0')
    useScript('assets/js/shop.js?v=4.0')
    useScript('assets/js/vendor/jquery-3.6.0.min.js')
    useScript('assets/js/vendor/jquery-migrate-3.3.0.min.js')
    useScript('assets/js/vendor/bootstrap.bundle.min.js')

    console.log(path);
    const token = localStorage.getItem("user_info");
    let wishlist = localStorage.getItem("wishlist");
    if (!wishlist) {

         wishlist = [];
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    }else {
         wishlist =  JSON.parse(wishlist);
    }
    if (token) {
        const decodedTOKEN = jwt_decode(token, {payload: true});

        const index = wishlist.findIndex(item => item.userId === decodedTOKEN.user_id);
        if (index === -1) {
            wishlist.push({
                userId: decodedTOKEN.user_id,
                products: []
            });
             localStorage.setItem("wishlist",JSON.stringify(wishlist));

        }


    }


    return (
        <React.Fragment>
            <Routes>
                <Route path=""  element={<Navigate replace to="invoice"/>} />
                <Route path="/invoice" element={<Invoice/>} />
                {/*<Route path={path}>*/}
                {/*    <div style={{paddingLeft: "15px"}}>*/}
                {/*        <ShopHeader/>*/}
                {/*        <main className="main">*/}
                {/*            <Routes>*/}
                {/*                <Route exact path={`${path}/cart`}>*/}
                {/*                    <Cart/>*/}
                {/*                </Route>*/}
                {/*                <Route exact path={`${path}/wishlist`}>*/}
                {/*                    <WishList/>*/}
                {/*                </Route>*/}
                {/*                <Route exact path={`${path}/checkout`}>*/}
                {/*                    <Checkout/>*/}
                {/*                </Route>*/}
                {/*                <Route exact path={`${path}/products`}>*/}
                {/*                    <ShopProducts/>*/}
                {/*                </Route>*/}
                {/*                <Route exact*/}
                {/*                       path={`${path}/products/:productId`}>*/}
                {/*                    <ProductDetails/>*/}
                {/*                </Route>*/}
                {/*                <Route exact path={`${path}/home`}>*/}
                {/*                    /!*<ShopModal/>*!/*/}
                {/*                    <ProductModalView/>*/}

                {/*                    <ShopBanner/>*/}

                {/*                    <ShopFeaturedCategories/>*/}

                {/*                    <ShopFeaturedBanners/>*/}

                {/*                    <section*/}
                {/*                        className="product-tabs section-padding position-relative">*/}
                {/*                        <div className="container">*/}
                {/*                            <HomeProductsList/>*/}
                {/*                        </div>*/}
                {/*                    </section>*/}

                {/*                    <ShopBestSells/>*/}
                {/*                    <ShopDeals/>*/}

                {/*                    <ShopTopProducts/>*/}
                {/*                </Route>*/}

                {/*                <Route path={`${path}/*`}>*/}
                {/*                    <Shop404Page/>*/}
                {/*                </Route>*/}
                {/*                <Navigate  exact to={`${path}/home`}/>*/}
                {/*            </Routes>*/}
                {/*        </main>*/}
                {/*        <ShopFooter/>*/}
                {/*    </div>*/}
                {/*</Route>*/}
            </Routes>
        </React.Fragment>
    );

};


export default HomeShop;
