import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {useHistory, useRouteMatch} from "react-router-dom";
import {useCart} from "react-use-cart";
import jwt_decode from "jwt-decode";
import emailjs from "emailjs-com";
import {useAlert} from "react-alert";

const WishListItem = props => {

    const alert = useAlert()
    const {path, url} = useRouteMatch();
    const {addItem} = useCart();
    const token = localStorage.getItem("user_info");
    const decodedTOKEN = jwt_decode(token, {payload: true});
    console.log(decodedTOKEN);
    let wishlist = JSON.parse(localStorage.getItem("wishlist"))

    const history = useHistory();

    const wishlistRemoveHandler = (e) => {
        e.preventDefault()
        if (token) {
            const index = wishlist.findIndex(item => item.userId === decodedTOKEN.user_id);
            const index2 = wishlist[index].products.findIndex(product => product.id === props.item.id);

                wishlist[index].products.splice(index2,1);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));

        }
        history.push('/shop/wishlist');

    }

    const sendEmail = (e) => {

        const templateParams = {
            product: props.item.name,
        };

        emailjs.send('service_6ljm59m', 'template_1ci3qaj',templateParams , 'xilxtpt5VbLFZNX98')
            .then((result) => {
                alert.show('Complaint sent !, Thank you.')
            }, (error) => {
                console.log(error.text);
            });

    };


    const button = props.item.quantity > 0 ?
        (
            <td className="text-right" data-title="Cart">
                <button onClick={(e) => {
                    if (props.item.quantity > 0) {
                        addItem(props.item);
                    }
                }} className="btn btn-sm">Add to cart
                </button>
            </td>
        ) :
        (
            <td className="text-right" data-title="Cart">
                <button onClick={sendEmail} className="btn btn-sm btn-secondary">Contact Us</button>
            </td>
        )

    return (
        <tr>
            <td className="custome-checkbox pl-30">
                <input className="form-check-input"
                       type="checkbox" name="checkbox"
                       id="exampleCheckbox2" value=""/>
                <label className="form-check-label"
                       htmlFor="exampleCheckbox2"></label>
            </td>
            <td className="image product-thumbnail"><img
                src={`http://localhost:3002/${props.item.image}`}
                alt="#"/></td>
            <td className="product-des product-name">
                <h6><a className="product-name mb-10"
                       href={`${path}/${props.item.id}`}>{props.item.name}</a>
                </h6>
                <div className="product-rate-cover">
                    <div
                        className="product-rate d-inline-block">
                        <div className="product-rating"
                             style={{width: "90%"}}></div>
                    </div>
                    <span
                        className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
            </td>
            <td className="price" data-title="Price">
                <h3 className="text-brand">${props.item.price}</h3>
            </td>
            <td className="text-center detail-info"
                data-title="Stock">
                <span
                    className={`stock-status ${props.item.quantity > 0 ? 'in-stock' : 'out-stock'} in-stock mb-0`}>{props.item.quantity > 0 ? 'In Stock' : 'Out Stock'}  </span>
            </td>
            {button}
            <td className="action text-center"
                data-title="Remove">
                <a href="#" onClick={wishlistRemoveHandler} className="text-body"><i
                    className="fi-rs-trash"></i></a>
            </td>
        </tr>
    );
};

export default WishListItem;