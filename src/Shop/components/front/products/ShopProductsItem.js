import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {Link, useRouteMatch} from "react-router-dom";
const ShopProductsItem = props => {

    const {path, url} = useRouteMatch();

    return (
        <div
            className="col-lg-1-5 col-md-4 col-12 col-sm-6" style={{padding: "20px 10px" }}>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div
                        className="product-img product-img-zoom">
                        <Link exact="true" to={`${path}/${props.id}`}>
                            <img className="default-img"
                                 src={`http://localhost:3002/${props.image}`}
                                 alt=""/>
                            <img className="hover-img"
                                 src={`http://localhost:3002/${props.image}`}
                                 alt=""/>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <a aria-label="Add To Wishlist"
                           className="action-btn"
                           href="#"><i
                            className="fi-rs-heart"></i></a>
                        <a aria-label="Compare"
                           className="action-btn"
                           href="#"><i
                            className="fi-rs-shuffle"></i></a>
                        <a aria-label="Quick view"
                           className="action-btn"
                           data-bs-toggle="modal"
                           data-bs-target="#quickViewModal"><i
                            className="fi-rs-eye"></i></a>
                    </div>
                    <div
                        className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">New</span>
                    </div>
                </div>
                <div className="product-content-wrap">
                    <div className="product-category">
                        <a href="#">Snack</a>
                    </div>
                    <h2><a href="shop-product-right.html">{props.name}</a></h2>
                    <div className="product-rate-cover">
                        <div
                            className="product-rate d-inline-block">
                            <div className="product-rating"
                                 style={{width: "90%"}}></div>
                        </div>
                        <span
                            className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                                    <span
                                        className="font-small text-muted">By <a
                                        href="vendor-details-1.html">NestFood</a></span>
                    </div>
                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>${props.price}.00</span>
                            {/*<span*/}
                            {/*    className="old-price">$32.8</span>*/}
                        </div>
                        <div className="add-cart">
                            <a className="add"
                               href="shop-cart.html"><i
                                className="fi-rs-shopping-cart mr-5"></i>Add
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProductsItem;