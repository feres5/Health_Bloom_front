
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import Products from "./pages/back/Products";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import {Switch} from "react-router";
import NewProduct from "./pages/back/NewProduct";
import UpdateProduct from "./pages/back/UpdateProduct";


const Shop = () => {
    //const {path, url} = useLocation();
    let path = useLocation().pathname;
    //console.log(path);
    return (
        <Routes>
            <Route path="/products/add" element={<NewProduct/>} />
            <Route path="/products/edit/:productId" element={<UpdateProduct/>} />
            <Route path="/products" element={<Products/>} />
            <Route path=""  element={<Navigate replace to={path+"/products"} />} />
        </Routes>
    );
}

export default Shop;
