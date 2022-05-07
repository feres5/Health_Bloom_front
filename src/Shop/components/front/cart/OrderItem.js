import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";
import {useHttpClient} from "../../../../shared/hooks/http-hook";

const OrderItem = props => {

    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const history = useHistory();

        const createdAt = new Date(0)
        createdAt.setUTCSeconds(props.date)
        const receiptHandler = e => {
            e.preventDefault();

            const fecthPayments = async () => {
                let responseData
                try {
                    responseData = await sendRequest(`http://localhost:3002/api/products/stripe/session/${props.id}`);

                } catch (e) {
                    console.log(e);
                }

               history.push(`invoice?session_id=${responseData.sessionId}`);
            };
            fecthPayments();
        }


        return (
            <tr>
                <td>#{props.id.substring(3, 8)}</td>
                <td>
                    {createdAt.toDateString()}
                </td>
                <td>Succeeded</td>
                <td>$ {props.total / 100}
                </td>
                <td><a href="" onClick={receiptHandler}
                       className="btn-small d-block">View</a>
                </td>
            </tr>
        );
    }
;

export default OrderItem;