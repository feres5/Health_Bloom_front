import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import ShopProductsItem from "./ShopProductsItem";
import ShopDealsOfTheDay from "./ShopDealsOfTheDay";
import ProductFilters from "./ProductFilters/ProductFilters";

const shopProducts = () => {

    return (
        <>
            <div >
                <div className="container">
                    <div className="archive-header">
                        <div className="row align-items-center">
                            <div className="col-xl-3">
                                <h1 className="mb-15">Snack</h1>
                                <div className="breadcrumb">
                                    <a href="index.html" rel="nofollow"><i
                                        className="fi-rs-home mr-5"></i>Home</a>
                                    <span></span> Shop <span></span> Snack
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-30">
                <div className="row flex-row-reverse">
                    <div className="col-lg-4-5">
                        <div className="shop-product-fillter">
                            <div className="totall-product">
                                <p>We found <strong
                                    className="text-brand">29</strong> items for
                                    you!
                                </p>
                            </div>
                            <div className="sort-by-product-area">
                                <div className="sort-by-cover mr-10">
                                    <div className="sort-by-product-wrap">
                                        <div className="sort-by">
                                    <span><i
                                        className="fi-rs-apps"></i>Show:</span>
                                        </div>
                                        <div className="sort-by-dropdown-wrap">
                                    <span> 50 <i
                                        className="fi-rs-angle-small-down"></i></span>
                                        </div>
                                    </div>
                                    <div className="sort-by-dropdown">
                                        <ul>
                                            <li><a className="active"
                                                   href="#">50</a>
                                            </li>
                                            <li><a href="#">100</a></li>
                                            <li><a href="#">150</a></li>
                                            <li><a href="#">200</a></li>
                                            <li><a href="#">All</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sort-by-cover">
                                    <div className="sort-by-product-wrap">
                                        <div className="sort-by">
                                            <span><i
                                                className="fi-rs-apps-sort"></i>Sort by:</span>
                                        </div>
                                        <div className="sort-by-dropdown-wrap">
                                    <span> Featured <i
                                        className="fi-rs-angle-small-down"></i></span>
                                        </div>
                                    </div>
                                    <div className="sort-by-dropdown">
                                        <ul>
                                            <li><a className="active"
                                                   href="#">Featured</a></li>
                                            <li><a href="#">Price: Low to
                                                High</a></li>
                                            <li><a href="#">Price: High to
                                                Low</a></li>
                                            <li><a href="#">Release Date</a>
                                            </li>
                                            <li><a href="#">Avg. Rating</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row product-grid">
                            <ShopProductsItem/>
                        </div>

                        <div className="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i
                                            className="fi-rs-arrow-small-left"></i></a>
                                    </li>
                                    <li className="page-item"><a
                                        className="page-link"
                                        href="#">1</a></li>
                                    <li className="page-item active"><a
                                        className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item"><a
                                        className="page-link"
                                        href="#">3</a></li>
                                    <li className="page-item"><a
                                        className="page-link dot"
                                        href="#">...</a></li>
                                    <li className="page-item"><a
                                        className="page-link"
                                        href="#">6</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <ShopDealsOfTheDay />

                    </div>
                <ProductFilters/>
                </div>
            </div>
        </>
    );
};

export default shopProducts;