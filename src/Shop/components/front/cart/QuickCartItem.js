import React from "react";
import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {Link, useRouteMatch} from "react-router-dom";


const QuickCartItem = props => {

    const {path, url} = useRouteMatch();


    return (
        <li>
            <div
                className="shopping-cart-img">
                <Link exact="true" to={`${path}/products/${props.id}`}><img
                    alt="Nest"
                    src={`http://localhost:3002/${props.image}`}/></Link>
            </div>
            <div
                className="shopping-cart-title">
                <h4><a
                    href="shop-product-right.html">{props.name}</a>
                </h4>
                <h4>
                    <span>{props.quantity} × </span>${props.price}
                </h4>
            </div>
            <div
                className="shopping-cart-delete">
                <a href="#" onClick={(e) => {
                    e.preventDefault()
                    props.onRemove(props.id)
                }}><i
                    className="fi-rs-cross-small"></i></a>
            </div>
        </li>
    );
};

export default QuickCartItem;