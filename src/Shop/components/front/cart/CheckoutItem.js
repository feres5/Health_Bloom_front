import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {useMatch } from "react-router-dom";

const CheckoutItem = props => {
    const {path, url} = useMatch();

    return (
        <tr>
            <td className="image product-thumbnail">
                <img
                    src={`http://localhost:3002/${props.image}`}
                    alt="#"/></td>
            <td>
                <h6 className="w-160 mb-5"><a
                    href={`${path}/products/${props.id}`}
                    className="text-heading">{props.name}</a></h6>
                <div className="product-rate-cover">
                    <div
                        className="product-rate d-inline-block">
                        <div
                            className="product-rating"
                            style={{width: "90%"}}>
                        </div>
                    </div>
                    <span
                        className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
            </td>
            <td>
                <h6 className="text-muted pl-20 pr-20">x
                    {props.quantity}</h6>
            </td>
            <td>
                <h4 className="text-brand">${props.quantity * props.price}</h4>
            </td>
        </tr>
    );
};

export default CheckoutItem;
