
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import Products from "./pages/back/Products";
import {Redirect, Route, useRouteMatch} from "react-router-dom";

import {Switch} from "react-router";
import NewProduct from "./pages/back/NewProduct";
import UpdateProduct from "./pages/back/UpdateProduct";


const Shop = () => {
    const {path, url} = useRouteMatch();
    console.log(path);
    return (
        <Switch>
            <Route exact path={`${path}/products/add`}>
                <NewProduct/>
            </Route>
            <Route exact path={`${path}/products/edit/:productId`}>
                <UpdateProduct/>
            </Route>
            <Route exact path={`${path}/products`}>
                <Products/>
            </Route>


            <Redirect exact to={`${path}/products`}/>

        </Switch>

    );
}

export default Shop;
