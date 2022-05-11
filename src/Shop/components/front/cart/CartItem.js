import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {useLocation} from "react-router-dom";

const CartItem = props => {
        let path = useLocation().pathname;


    return (
        <tr>
            <td className="custome-checkbox pl-30">
                <input className="form-check-input"
                       type="checkbox" name="checkbox"
                       id="exampleCheckbox1" value=""/>
                <label className="form-check-label"
                       htmlFor="exampleCheckbox1"></label>
            </td>
            <td className="image product-thumbnail pt-40">
                <img
                    src={process.env.REACT_APP_BackEnd_url+`/${props.image}`}
                    alt="#"/>
            </td>
            <td className="product-des product-name">
                <h6 className="mb-5"><a
                    className="product-name mb-10 text-heading"
                    href={`${path}/products/${props.id}`}>{props.name}</a></h6>
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
                <h4 className="text-body">${props.price} </h4>
            </td>
            <td className="text-center detail-info"
                data-title="Stock">
                <div className="detail-extralink mr-15">
                    <div
                        className="detail-qty border radius">
                        <a href="#"
                           onClick={(e) => {
                               e.preventDefault()
                               props.onUpdateQuantity(props.id, props.quantity - 1)
                           }}
                           className="qty-down"><i
                            className="fi-rs-angle-small-down"></i></a>
                        <span
                            className="">{props.quantity}</span>
                        <a href="#"
                           onClick={(e) => {
                               e.preventDefault()
                               props.onUpdateQuantity(props.id, props.quantity + 1)
                           }}
                           className="qty-up"><i
                            className="fi-rs-angle-small-up"></i></a>
                    </div>
                </div>
            </td>
            <td className="price" data-title="Price">
                <h4 className="text-brand">${props.quantity * props.price} </h4>
            </td>
            <td className="action text-center"
                data-title="Remove"><a href="#"
                                       onClick={(e) => {
                                           e.preventDefault()
                                           props.onRemove(props.id)
                                       }}
                                       className="text-body"><i
                className="fi-rs-trash"></i></a></td>
        </tr>
    );
};

export default CartItem;
