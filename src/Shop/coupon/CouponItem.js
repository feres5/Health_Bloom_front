import "./assets/css/datatables.bundle.scoped.css"
import "./assets/css/plugins.bundle.scoped.css"
import "./assets/css/style.bundle.scoped.css"

import {Button} from "react-bootstrap";
import {AiFillDelete, AiFillEdit} from "react-icons/all";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useHttpClient} from "../../shared/hooks/http-hook";

const CouponItem = props => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    let path = useLocation().pathname;
    const confirmDeleteHandler = async () => {

        try {

            await sendRequest(
                process.env.REACT_APP_BackEnd_url+`/api/coupons/${props.id}`,
                'DELETE'
            );
            props.onDelete(props.id);

        } catch (e) {
            console.log(e);
        }
    };
    return (
        <tr>

            <td>
                <div
                    className="form-check form-check-sm form-check-custom form-check-solid">
                    <input className="form-check-input"
                           type="checkbox" value="1"/>
                </div>
            </td>

            <td>


                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html"
                   className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                   data-kt-ecommerce-category-filter="category_name">{props.name}</a>

                <div
                    className="text-muted fs-7 fw-bolder">Discounts on
                    HealthBloom
                    Shop Products
                </div>

            </td>


            <td>

                <div
                    className="badge badge-light-success mt-4 ml-5">{props.percentage} %
                </div>

            </td>

            <td className="text-end">
                <Link exact="true" to={`${path}/edit/${props.id}`}>
                    <Button variant="outline-secondary"> <AiFillEdit/></Button>
                </Link>
                    <Button onClick={confirmDeleteHandler} variant="outline-danger"> <AiFillDelete/></Button>

            </td>
        </tr>
    );
};

export default CouponItem;