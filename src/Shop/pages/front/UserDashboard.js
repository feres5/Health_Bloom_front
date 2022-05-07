import "../../assets/css/plugins/animate.min.css";
import "../../assets/css/main.scoped.css";
import "../../home.css";
import jwt_decode from "jwt-decode";
import {useEffect, useState} from "react";
import OrderItem from "../../components/front/cart/OrderItem";
import {useHttpClient} from "../../../shared/hooks/http-hook";
import OrderList from "../../components/front/cart/OrderList";

const UserDashboard = () => {

    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const [loggedIn, setLoggedIn] = useState(false);
    const [loadedPayments, setLoadedPayments] = useState();

    useEffect(() => {
        const token = localStorage.getItem("user_info");
        let decodedTOKEN;
        if (token) {
            setLoggedIn(true);
            decodedTOKEN = jwt_decode(token, {payload: true});
            const fecthPayments = async () => {

                try {
                    const responseData = await sendRequest(`http://localhost:3002/api/products/stripe/payments/${decodedTOKEN.Email}`);
                    setLoadedPayments(responseData)
                    console.log(responseData);
                } catch (e) {
                    console.log(e);
                }

            };
            fecthPayments();
        }
    }, [sendRequest]);

    return (
        <main className="main pages">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="dashboard-menu">
                                        <ul className="nav flex-column"
                                            role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active"
                                                   id="dashboard-tab"
                                                   data-bs-toggle="tab"
                                                   href="#dashboard" role="tab"
                                                   aria-controls="dashboard"
                                                   aria-selected="false"><i
                                                    className="fi-rs-settings-sliders mr-10"></i>Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"
                                                   id="orders-tab"
                                                   data-bs-toggle="tab"
                                                   href="#orders" role="tab"
                                                   aria-controls="orders"
                                                   aria-selected="false"><i
                                                    className="fi-rs-shopping-bag mr-10"></i>Orders</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"
                                                   href="page-login.html"><i
                                                    className="fi-rs-sign-out mr-10"></i>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div
                                        className="tab-content account dashboard-content pl-50">
                                        <div
                                            className="tab-pane fade active show"
                                            id="dashboard" role="tabpanel"
                                            aria-labelledby="dashboard-tab">
                                            <div>
                                                <div>
                                                    <h3 className="mb-0">Hello
                                                        Rosie!</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show"
                                             id="orders" role="tabpanel"
                                             aria-labelledby="orders-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="mb-0">Your
                                                        Orders</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div
                                                        className="table-responsive">
                                                        <table
                                                            className="table">
                                                            <thead>
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Receipt</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            { !isLoading && loadedPayments &&
                                                                <OrderList
                                                                    items={loadedPayments}
                                                                />
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserDashboard;
