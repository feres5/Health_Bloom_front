import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import WishListItem from "./WishListItem";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";

const WishList = () => {


    const token = localStorage.getItem("user_info");
    let wishlist = localStorage.getItem("wishlist");
    let products;
    console.log();


    if (token) {
        const decodedTOKEN = jwt_decode(token, {payload: true});
        if (wishlist) {
            wishlist = JSON.parse(wishlist);
             wishlist.map((item) => {
                if (item.userId === decodedTOKEN.user_id) {
                    products =  item.products;
                }
            });

        }
    } else {
        products = [];
    }


    return (
        <>

            <div className="container mb-30 mt-50">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <div className="mb-50">
                            <h1 className="heading-2 mb-10">Your
                                Wishlist</h1>
                            <h6 className="text-body">There are <span
                                className="text-brand">{products.length}</span> products
                                in this
                                list</h6>
                        </div>
                        <div className="table-responsive shopping-summery">
                            <table className="table table-wishlist">
                                <thead>
                                <tr className="main-heading">
                                    <th className="custome-checkbox start pl-30">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               name="checkbox"
                                               id="exampleCheckbox11"
                                               value=""/>
                                        <label className="form-check-label"
                                               htmlFor="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colSpan="2">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock Status</th>
                                    <th scope="col">Action</th>
                                    <th scope="col" className="end">Remove
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.map(item => (
                                    <WishListItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WishList;