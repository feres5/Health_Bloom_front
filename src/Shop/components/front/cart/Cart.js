import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import "./cart.css";
import {useCart} from "react-use-cart";
import CartItem from "./CartItem";
import QuickCartItem from "./QuickCartItem";
import React, {useEffect, useState} from "react";
import {useRouteMatch} from "react-router-dom";
import {useHttpClient} from "../../../../shared/hooks/http-hook";

const Cart = () => {
    const [couponName, setCouponName] = useState("");
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [coupon, setCoupon] = useState();
    const [discount, setDiscount] = useState(0);

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
        setCartMetadata
    } = useCart();
    useEffect(() => {
        setCartMetadata({finalPrice: cartTotal, discount: 0});
    }, []);
    const {path, url} = useRouteMatch();

    const couponSubmitHandler = event => {

        const fetchCoupon = async () => {
            try {

                const responseData = await sendRequest(
                    `http://localhost:3002/api/coupons/name/${couponName}`
                );
                if (responseData.coupon) {
                    setCoupon(responseData.coupon);
                    setDiscount(cartTotal * responseData.coupon.percentage / 100)
                    setCartMetadata({
                        finalPrice: (cartTotal - (cartTotal * responseData.coupon.percentage / 100)).toFixed(2),
                        discount: responseData.coupon.percentage
                    })
                } else {
                    setCouponName("");
                    setDiscount(0);
                    setCartMetadata({
                        finalPrice: cartTotal,
                        discount: 0
                    })
                }
                console.log(responseData);

            } catch (e) {
                console.log(e);
            }
        };
        fetchCoupon();
    };

    const changeHandler = event => {
        setCouponName(event.target.value);

    }
    const clearCoupon = () => {
        setCouponName("");
        setCoupon(undefined);
        setDiscount(0);
        setCartMetadata({finalPrice: cartTotal, discount: 0})
    }
    return (
        <>
            <div id="CartHeader">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="index.html" rel="nofollow"><i
                            className="fi-rs-home mr-5"></i>Home</a>
                        <span></span> Shop
                        <span></span> Cart
                    </div>
                </div>
            </div>
            <div className="container mb-80 mt-50">
                <div className="row">
                    <div className="col-lg-8 mb-40">
                        <h1 className="heading-2 mb-10">Your Cart</h1>
                        <div className="d-flex justify-content-between">
                            <h6 className="text-body">There are <span
                                className="text-brand">{totalUniqueItems}</span> products
                                in your
                                cart
                            </h6>
                            <h6 className="text-body"><a href="#"
                                                         onClick={(e) => {
                                                             e.preventDefault()
                                                             emptyCart()
                                                         }}
                                                         className="text-muted"><i
                                className="fi-rs-trash mr-5"></i>Clear Cart</a>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="table-responsive shopping-summery">
                            <table id="tablecart">
                                <thead>
                                <tr className="main-heading">
                                    <th className="custome-checkbox start pl-30">
                                        <input className="form-check-input"
                                               type="checkbox" name="checkbox"
                                               id="exampleCheckbox11" value=""/>
                                        <label className="form-check-label"
                                               htmlFor="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colSpan="2">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col" className="end">Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <CartItem image={item.image}
                                                  name={item.name}
                                                  quantity={item.quantity}
                                                  price={item.price}
                                                  key={index}
                                                  item={item}
                                                  id={item.id}
                                                  onRemove={removeItem}
                                                  onUpdateQuantity={updateItemQuantity}
                                        />
                                    );
                                })}

                                </tbody>
                            </table>
                        </div>
                        <div className="divider-2 mb-30"></div>
                        <div
                            className="cart-action d-flex justify-content-between">
                            <a className="btn" href="/shop/products"
                               style={{color: "#fff"}}><i
                                className="fi-rs-arrow-left mr-10"></i>Continue
                                Shopping</a>
                            <a className="btn  mr-10 mb-sm-15"
                               style={{color: "#fff"}}><i
                                className="fi-rs-refresh mr-10"></i>Update Cart</a>
                        </div>
                        <div className="row mt-50">

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="border p-md-4 cart-totals ml-30">
                            <div className="table-responsive">
                                <div className="p-20">
                                    <h4 className="mb-10">Apply Coupon</h4>
                                    <p className="mb-30"><span
                                        className="font-lg text-muted">Using A Promo Code?</span>
                                    </p>

                                    <div
                                        className="d-flex justify-content-between">
                                        <input
                                            disabled={coupon ? true : false}
                                            className="font-medium mr-15 coupon"
                                            name="Coupon"
                                            value={couponName}
                                            onChange={changeHandler}
                                            placeholder="Enter Your Coupon"/>
                                        <button
                                            className={coupon ? "btn-outline-danger" : "btn"}
                                            onClick={coupon ? clearCoupon : couponSubmitHandler}>
                                            <i
                                                className="fi-rs-label mr-10"></i>{coupon ? "Remove" : "Apply"}
                                        </button>
                                    </div>

                                </div>
                                <table className="table no-border">
                                    <tbody>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Subtotal</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h4 className="text-brand text-end">${cartTotal}</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colSpan="2">
                                            <div
                                                className="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Coupon
                                                Discount</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h5 className="text-heading text-end">{discount}$</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Estimate
                                                for</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h5 className="text-heading text-end">Tunisia</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colSpan="2">
                                            <div
                                                className="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Total</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h4 className="text-brand text-end">${(cartTotal - discount).toFixed(2)}</h4>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/shop/checkout"
                               className="btn mb-20 w-100">Proceed To
                                CheckOut<i className="fi-rs-sign-out ml-15"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;