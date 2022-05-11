import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {Link, useNavigate , useLocation } from "react-router-dom";
import {useCart} from "react-use-cart";
import jwt_decode from "jwt-decode";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ShopProductsItem = props => {

    //const {path, url} = useMatch();
    let path = useLocation().pathname;
    const {addItem} = useCart();

    const token = localStorage.getItem("user_info");
    let wishlist = JSON.parse(localStorage.getItem("wishlist"))

    const history = useNavigate ();

    const wishlistHandler = (e) => {
        e.preventDefault()
        if (token) {
            const decodedTOKEN = jwt_decode(token, {payload: true});
            const index = wishlist.findIndex(item => item.userId === decodedTOKEN.user_id);
            const index2 = wishlist[index].products.findIndex(product => product.id === props.item.id);
            if (index2 === -1) {

                wishlist[index].products.push(props.item);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));

            }
            history('/shop/wishlist');
            toast.success('Item Added to Wishlist!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }

    return (
        <div
            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
            style={{padding: "20px 10px"}}>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div
                        className="product-img product-img-zoom">
                        <Link exact="true" to={`${path}/${props.id}`}>
                            <img className="default-img"
                                 src={process.env.REACT_APP_BackEnd_url+`/${props.image}`}
                                 alt=""/>
                            <img className="hover-img"
                                 src={process.env.REACT_APP_BackEnd_url+`/${props.image}`}
                                 alt=""/>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <a aria-label="Add To Wishlist"
                           className="action-btn"
                           onClick={wishlistHandler}><i
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
                        <a href="#">{props.item.category}</a>
                    </div>
                    <h2><a href={`${path}/${props.id}`}>{props.name}</a></h2>
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
                                        href="vendor-details-1.html">HealthBloom</a></span>
                    </div>
                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>${props.price}.00</span>
                            {/*<span*/}
                            {/*    className="old-price">$32.8</span>*/}
                        </div>
                        <div className="add-cart">
                            <a className="add"
                               href=""
                               onClick={(e) =>{
                                   e.preventDefault()
                                   if (props.item.quantity > 0) {

                                       toast.success('Item Added to Cart!', {
                                           position: "bottom-right",
                                           autoClose: 2000,
                                           hideProgressBar: false,
                                           closeOnClick: true,
                                           pauseOnHover: true,
                                           draggable: true,
                                           progress: undefined,
                                       });
                                       addItem(props.item);
                                   }else {
                                       toast.error('Item Out of Stock :(', {
                                           position: "bottom-right",
                                           autoClose: 2000,
                                           hideProgressBar: false,
                                           closeOnClick: true,
                                           pauseOnHover: true,
                                           draggable: true,
                                           progress: undefined,
                                       });
                                   }
                               }}><i
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
