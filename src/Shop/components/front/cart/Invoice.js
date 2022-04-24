import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
const Invoice = () => {

    return (
        <div className="invoice invoice-content invoice-1">
            <div className="back-top-home hover-up mt-30 ml-30">
                <a className="hover-up" href="index.html"><i
                    className="fi-rs-home mr-5"></i> Homepage</a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="invoice-inner">
                            <div className="invoice-info" id="invoice_wrapper">
                                <div className="invoice-header">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="invoice-name">
                                                <div className="logo">
                                                    <a href="index.html"><img
                                                        src="../../../../assets/img/logoNav.png"
                                                        alt="logo"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="invoice-numb">
                                                <h6 className="text-end mb-10 mt-20">Date:
                                                    30 Nov 2021</h6>
                                                <h6 className="text-end invoice-header-1">Invoice
                                                    No: #IVSF1970191</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-top">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-6">
                                            <div className="invoice-number">
                                                <h4 className="invoice-title-1 mb-10">Invoice
                                                    To</h4>
                                                <p className="invoice-addr-1">
                                                    <strong>AliThemes Pty
                                                        Ltd</strong> <br/>
                                                    contactalithemes.com <br/>
                                                    PO Box 16122, Collins Street
                                                    West, <br/>Australia
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="invoice-number">
                                                <h4 className="invoice-title-1 mb-10">Bill
                                                    To</h4>
                                                <p className="invoice-addr-1">
                                                    <strong>NestMart
                                                        Inc</strong> <br/>
                                                    billing@NestMart.com <br/>
                                                    205 North Michigan
                                                    Avenue, <br/>Suite 810
                                                    Chicago, 60601, USA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-lg-9 col-md-6">
                                            <h4 className="invoice-title-1 mb-10">Due
                                                Date:</h4>
                                            <p className="invoice-from-1">30
                                                November 2021</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <h4 className="invoice-title-1 mb-10">Payment
                                                Method</h4>
                                            <p className="invoice-from-1">Via
                                                Paypal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-center">
                                    <div className="table-responsive">
                                        <table
                                            className="table table-striped invoice-table">
                                            <thead className="bg-active">
                                            <tr>
                                                <th>Item name</th>
                                                <th className="text-center">Unit
                                                    Price
                                                </th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-right">Amount</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div
                                                        className="item-desc-1">
                                                        <span>Field Roast Chao Cheese Creamy Original</span>
                                                        <small>SKU:
                                                            FWM15VKT</small>
                                                    </div>
                                                </td>
                                                <td className="text-center">$10.99</td>
                                                <td className="text-center">1</td>
                                                <td className="text-right">$10.99</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div
                                                        className="item-desc-1">
                                                        <span>Blue Diamond Almonds Lightly Salted</span>
                                                        <small>SKU:
                                                            FWM15VKT</small>
                                                    </div>
                                                </td>
                                                <td className="text-center">$20.00</td>
                                                <td className="text-center">3</td>
                                                <td className="text-right">$60.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div
                                                        className="item-desc-1">
                                                        <span>Fresh Organic Mustard Leaves Bell Pepper</span>
                                                        <small>SKU:
                                                            KVM15VK</small>
                                                    </div>
                                                </td>
                                                <td className="text-center">$640.00</td>
                                                <td className="text-center">1</td>
                                                <td className="text-right">$640.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div
                                                        className="item-desc-1">
                                                        <span>All Natural Italian-Style Chicken Meatballs</span>
                                                        <small>SKU:
                                                            98HFG</small>
                                                    </div>
                                                </td>
                                                <td className="text-center">$240.00</td>
                                                <td className="text-center">1</td>
                                                <td className="text-right">$240.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"
                                                    className="text-end f-w-600">SubTotal
                                                </td>
                                                <td className="text-right">$1710.99</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"
                                                    className="text-end f-w-600">Tax
                                                </td>
                                                <td className="text-right">$85.99</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"
                                                    className="text-end f-w-600">Grand
                                                    Total
                                                </td>
                                                <td className="text-right f-w-600">$1795.99</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="invoice-bottom">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div>
                                                <h3 className="invoice-title-1">Important
                                                    Note</h3>
                                                <ul className="important-notes-list-1">
                                                    <li>All amounts shown on
                                                        this invoice are in US
                                                        dollars
                                                    </li>
                                                    <li>finance charge of 1.5%
                                                        will be made on unpaid
                                                        balances after 30 days.
                                                    </li>
                                                    <li>Once order done, money
                                                        can't refund
                                                    </li>
                                                    <li>Delivery might delay due
                                                        to some external
                                                        dependency
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-offsite">
                                            <div className="text-end">
                                                <p className="mb-0 text-13">Thank
                                                    you for your business</p>
                                                <p><strong>AliThemes
                                                    JSC</strong></p>
                                                <div
                                                    className="mobile-social-icon mt-50 print-hide">
                                                    <h6>Follow Us</h6>
                                                    <a href="#"><img
                                                        src="assets/imgs/theme/icons/icon-facebook-white.svg"
                                                        alt=""/></a>
                                                    <a href="#"><img
                                                        src="assets/imgs/theme/icons/icon-twitter-white.svg"
                                                        alt=""/></a>
                                                    <a href="#"><img
                                                        src="assets/imgs/theme/icons/icon-instagram-white.svg"
                                                        alt=""/></a>
                                                    <a href="#"><img
                                                        src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                                                        alt=""/></a>
                                                    <a href="#"><img
                                                        src="assets/imgs/theme/icons/icon-youtube-white.svg"
                                                        alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="invoice-btn-section clearfix d-print-none">
                                <a href="javascript:window.print()"
                                   className="btn btn-lg btn-custom btn-print hover-up">
                                    <img
                                        src="assets/imgs/theme/icons/icon-print.svg"
                                        alt=""/> Print </a>
                                <a id="invoice_download_btn"
                                   className="btn btn-lg btn-custom btn-download hover-up">
                                    <img
                                        src="assets/imgs/theme/icons/icon-download.svg"
                                        alt=""/> Download </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;