import React, {useEffect, useState} from "react";
import {useHttpClient} from "../../../shared/hooks/http-hook";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import ProductsList from "../../components/ProductList";
import {Button} from "react-bootstrap";
import NewProduct from "./NewProduct";
import {Link, useRouteMatch} from "react-router-dom";

const Products = () => {
    const {path, url} = useRouteMatch();

    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedProducts, setLoadedProducts] = useState();
    const [showNewProduct, setShowNewProduct] = useState(false);
    useEffect(() => {
        const fecthProducts = async () => {

            try {
                const responseData = await sendRequest('http://localhost:3002/api/products');

                setLoadedProducts(responseData.products);
            } catch (e) {
                console.log(e);
            }

        };
        fecthProducts();

    }, [sendRequest]);


    const handleShow = () => setShowNewProduct(true);

    return <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (<div className="center">
                <LoadingSpinner/>
            </div>
        )}
        <Link to={`${path}/add`}>
            <Button variant="secondary" >
                Add Product
            </Button>
        </Link>
        {!isLoading && loadedProducts && <ProductsList items={loadedProducts}/>}
    </React.Fragment>;
};

export default Products;