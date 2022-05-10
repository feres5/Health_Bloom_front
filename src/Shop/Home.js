import React, {useEffect} from "react";

import jquery from 'jquery';
import useScript from "../hooks/useScript";
import { Layout } from "antd";

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
import Main from "../Dashboard/components/layout/Main";
import Home from "../Dashboard/pages/Home";

window.$ = window.jQuery = jquery;
const HomeShop = () => {
    //const {path, url} = useLocation();
    let path = useLocation().pathname;

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
                <Route path="/invoice" element={<Invoice/>} />
                <Route path="/home" element={<HomeLayout><HomePage/></HomeLayout>} />
                <Route path="/products" element={<HomeLayout><ShopProducts/></HomeLayout>} />
                <Route path="/products/:productId" element={<HomeLayout><ProductDetails/></HomeLayout>} />
                <Route path="/checkout" element={<HomeLayout><Checkout/></HomeLayout>} />
                <Route path="/wishlist" element={<HomeLayout><WishList/></HomeLayout>} />
                <Route path="/cart" element={<HomeLayout><Cart/></HomeLayout>} />
                <Route path="/*" element={<HomeLayout><Shop404Page/></HomeLayout>} />
                <Route path=""  element={<Navigate replace to={path+"/home"} />} />
            </Routes>
        </React.Fragment>
    );

};

function HomeLayout({children}){
    const { Content } = Layout;
    return(
        <div style={{paddingLeft: "15px"}}>
            <ShopHeader/>
            <main className="main">
                <Content className="content-ant">{children}</Content>
            </main>
            <ShopFooter/>
        </div>
    );
}

function HomePage(){
    return(
        <>
            {/*<ShopModal/>*/}
            <ProductModalView/>
            <ShopBanner/>
            <ShopFeaturedCategories/>
            <ShopFeaturedBanners/>
            <section className="product-tabs section-padding position-relative">
                <div className="container">
                    <HomeProductsList/>
                </div>
            </section>
            <ShopBestSells/>
            <ShopDeals/>
            <ShopTopProducts/>
        </>
    );
}

export default HomeShop;
