import React, {useEffect, useState} from "react";
import {useHttpClient} from "../../../shared/hooks/http-hook";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import ProductsList from "../../components/ProductList";
import {Button} from "react-bootstrap";
import NewProduct from "./NewProduct";
import {Link, useLocation} from "react-router-dom";

const Products = () => {
    //const {path, url} = useLocation();
    let path = useLocation().pathname;
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedProducts, setLoadedProducts] = useState();
    const [showNewProduct, setShowNewProduct] = useState(false);
    useEffect(() => {
        const fecthProducts = async () => {

            try {
                const responseData = await sendRequest(process.env.REACT_APP_BackEnd_url+'/api/products');

                setLoadedProducts(responseData.products);
            } catch (e) {
                console.log(e);
            }

        };
        fecthProducts();

    }, [sendRequest]);

    const productDeletedHandler = deletedProductId => {
        setLoadedProducts(prevProducts => prevProducts.filter(product => product.id !== deletedProductId));
    };


    const handleShow = () => setShowNewProduct(true);
    //console.log(path);
    return <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (<div className="center">
                <LoadingSpinner/>
            </div>
        )}
        <Link to={path+"/add"}>
            <Button variant="secondary" >
                Add Product
            </Button>
        </Link>
        {!isLoading && loadedProducts && <ProductsList items={loadedProducts}
                                                       onDeleteProduct={productDeletedHandler}/>}
    </React.Fragment>;
};

export default Products;
