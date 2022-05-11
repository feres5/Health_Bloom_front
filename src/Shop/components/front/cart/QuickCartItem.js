import React from "react";
import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {Link, useLocation} from "react-router-dom";


const QuickCartItem = props => {


    let path = useLocation().pathname;



    return (
        <li>
            <div
                className="shopping-cart-img">
                <Link exact="true" to={`${path}/products/${props.id}`}><img
                    alt="Nest"
                    src={process.env.REACT_APP_BackEnd_url+`/${props.image}`}/></Link>
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
