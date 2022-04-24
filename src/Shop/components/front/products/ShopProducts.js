import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import ShopDealsOfTheDay from "./ShopDealsOfTheDay";
import ProductFilters from "./ProductFilters/ProductFilters";
import ShopProductsList from "./ShopProductsList";
import {useHttpClient} from "../../../../shared/hooks/http-hook";
import {useEffect, useState} from "react";


const ShopProducts = () => {

    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedProducts, setLoadedProducts] = useState();
    const [gridView, setGridView] = useState(true);

    const gridViewHandler = () => setGridView(prevState => {
            console.log(prevState);
            return !prevState;
        }
    );


    useEffect(() => {
        const fecthProducts = async () => {

            try {
                const responseData = await sendRequest('http://localhost:3002/api/products');

                setLoadedProducts(responseData.products);
                console.log(responseData);
            } catch (e) {
                console.log(e);
            }

        };
        fecthProducts();

    }, [sendRequest]);

    return (
        <div style={{paddingLeft: "5px"}}>
            <div>
                <div className="container" style={{padding: "30px 10px"}}>
                    <div className="archive-header">
                        <div className="row align-items-center">
                            <div className="col-xl-3">
                                <h1 className="mb-15">Products</h1>
                                <div className="breadcrumb">
                                    <a href="index.html" rel="nofollow"><i
                                        className="fi-rs-home mr-5"></i>Home</a>
                                    <span></span> Shop <span></span> Products
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-30">
                <div className="row flex-row-reverse">
                    <div className="col-lg-4-5" style={{paddingLeft: "15px"}}>
                        <div className="shop-product-fillter">
                            <div className="totall-product">
                                <p>We found <strong
                                    className="text-brand">29</strong> items for
                                    you!
                                </p>
                            </div>
                            <div className="sort-by-product-area">
                                <div className="sort-by-cover mr-10">
                                    <div onClick={gridViewHandler}
                                         className="sort-by-product-wrap">
                                        <div className="sort-by">
                                    <span><i
                                        className="fi-rs-apps"></i>View</span>
                                        </div>
                                    </div>

                                </div>
                                <select name="productsSelect"
                                        className="sort-by-dropdown">
                                    <option value="volvo">Volvo</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="volvo">Volvo</option>

                                </select>
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

                                </div>
                            </div>
                        </div>
                        {gridView &&
                            <div className="row product-grid">
                                {!isLoading && loadedProducts &&
                                    <ShopProductsList items={loadedProducts}
                                                      grid={gridView}
                                                      />}
                            </div>}
                        {!gridView &&
                            <div className="product-list mb-50">
                                {!isLoading && loadedProducts &&
                                    <ShopProductsList items={loadedProducts}
                                                      grid={gridView}
                                                      />}
                            </div>}

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
                        <ShopDealsOfTheDay/>

                    </div>
                    <ProductFilters/>
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;