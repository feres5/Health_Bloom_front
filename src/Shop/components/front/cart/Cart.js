import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import "./cart.css";

const Cart = () => {

    return (
        <>
            <div id="CartHeader" >
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
                                className="text-brand">3</span> products in your
                                cart
                            </h6>
                            <h6 className="text-body"><a href="#"
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
                                            <label className="form-check-label" htmlFor="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colSpan="2">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col" className="end">Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="pt-30">
                                    <td className="custome-checkbox pl-30">
                                        <input className="form-check-input"
                                               type="checkbox" name="checkbox"
                                               id="exampleCheckbox1" value=""/>
                                            <label className="form-check-label"
                                                   htmlFor="exampleCheckbox1"></label>
                                    </td>
                                    <td className="image product-thumbnail pt-40">
                                        <img
                                            src="assets/imgs/shop/product-1-1.jpg"
                                            alt="#"/>
                                    </td>
                                    <td className="product-des product-name">
                                        <h6 className="mb-5"><a
                                            className="product-name mb-10 text-heading"
                                            href="shop-product-right.html">Field
                                            Roast
                                            Chao Cheese Creamy Original</a></h6>
                                        <div className="product-rate-cover">
                                            <div
                                                className="product-rate d-inline-block">
                                                <div className="product-rating"
                                                     style={{width: "90%"}}>
                                                </div>
                                            </div>
                                            <span
                                                className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                    </td>
                                    <td className="price" data-title="Price">
                                        <h4 className="text-body">$2.51 </h4>
                                    </td>
                                    <td className="text-center detail-info"
                                        data-title="Stock">
                                        <div className="detail-extralink mr-15">
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
                                        </div>
                                    </td>
                                    <td className="price" data-title="Price">
                                        <h4 className="text-brand">$2.51 </h4>
                                    </td>
                                    <td className="action text-center"
                                        data-title="Remove"><a href="#"
                                                               className="text-body"><i
                                        className="fi-rs-trash"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="custome-checkbox pl-30">
                                        <input className="form-check-input"
                                               type="checkbox" name="checkbox"
                                               id="exampleCheckbox2" value=""/>
                                            <label className="form-check-label"
                                                   htmlFor="exampleCheckbox2"></label>
                                    </td>
                                    <td className="image product-thumbnail"><img
                                        src="assets/imgs/shop/product-2-1.jpg"
                                        alt="#"/>
                                    </td>
                                    <td className="product-des product-name">
                                        <h6 className="mb-5"><a
                                            className="product-name mb-10 text-heading"
                                            href="shop-product-right.html">Blue
                                            Diamond
                                            Almonds Lightly Salted</a></h6>
                                        <div className="product-rate-cover">
                                            <div
                                                className="product-rate d-inline-block">
                                                <div className="product-rating"
                                                     style={{width: "90%"}}>
                                                </div>
                                            </div>
                                            <span
                                                className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                    </td>
                                    <td className="price" data-title="Price">
                                        <h4 className="text-body">$3.2 </h4>
                                    </td>
                                    <td className="text-center detail-info"
                                        data-title="Stock">
                                        <div className="detail-extralink mr-15">
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
                                        </div>
                                    </td>
                                    <td className="price" data-title="Price">
                                        <h4 className="text-brand">$3.2 </h4>
                                    </td>
                                    <td className="action text-center"
                                        data-title="Remove"><a href="#"
                                                               className="text-body"><i
                                        className="fi-rs-trash"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="custome-checkbox pl-30">
                                        <input className="form-check-input"
                                               type="checkbox" name="checkbox"
                                               id="exampleCheckbox3" value=""/>
                                            <label className="form-check-label"
                                                   htmlFor="exampleCheckbox3"></label>
                                    </td>
                                    <td className="image product-thumbnail"><img
                                        src="assets/imgs/shop/product-3-1.jpg"
                                        alt="#"/>
                                    </td>
                                    <td className="product-des product-name">
                                        <h6 className="mb-5"><a
                                            className="product-name mb-10 text-heading"
                                            href="shop-product-right.html">Fresh
                                            Organic
                                            Mustard Leaves Bell Pepper</a></h6>
                                        <div className="product-rate-cover">
                                            <div
                                                className="product-rate d-inline-block">
                                                <div className="product-rating"
                                                     style={{width: "90%"}}>
                                                </div>
                                            </div>
                                            <span
                                                className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                    </td>
                                    <td className="price" data-title="Price">
                                        <h4 className="text-body">$2.43 </h4>
                                    </td>
                                    <td className="text-center detail-info"
                                        data-title="Stock">
                                        <div className="detail-extralink mr-15">
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
                                        </div>
                                    </td>
                                    <td className="price" data-title="Price">
                                        <h4 className="text-brand">$2.43 </h4>
                                    </td>
                                    <td className="action text-center"
                                        data-title="Remove"><a href="#"
                                                               className="text-body"><i
                                        className="fi-rs-trash"></i></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="divider-2 mb-30"></div>
                        <div
                            className="cart-action d-flex justify-content-between">
                            <a className="btn " style={{color:"#fff"}}><i
                                className="fi-rs-arrow-left mr-10"></i>Continue
                                Shopping</a>
                            <a className="btn  mr-10 mb-sm-15" style={{color:"#fff"}}><i
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
                                    <form action="#">
                                        <div
                                            className="d-flex justify-content-between">
                                            <input
                                                className="font-medium mr-15 coupon"
                                                name="Coupon"
                                                placeholder="Enter Your Coupon"/>
                                            <button className="btn"><i
                                                className="fi-rs-label mr-10"></i>Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <table className="table no-border">
                                    <tbody>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Subtotal</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h4 className="text-brand text-end">$12.31</h4>
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
                                            <h6 className="text-muted">Shipping</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h5 className="text-heading text-end">Free</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">
                                            <h6 className="text-muted">Estimate
                                                for</h6>
                                        </td>
                                        <td className="cart_total_amount">
                                            <h5 className="text-heading text-end">United
                                                Kingdom</h5></td>
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
                                            <h4 className="text-brand text-end">$12.31</h4>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="#" className="btn mb-20 w-100">Proceed To
                                CheckOut<i className="fi-rs-sign-out ml-15"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;