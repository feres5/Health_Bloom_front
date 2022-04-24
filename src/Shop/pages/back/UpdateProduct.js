import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import Input from "../../../shared/components/FormElements/Input";
import ImageUpload from "../../../shared/components/FormElements/ImageUpload";
import {useHttpClient} from "../../../shared/hooks/http-hook";
import {useForm} from "../../../shared/hooks/form-hook";
import {
    VALIDATOR_MIN,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../../shared/util/validators";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../../shared/components/FormElements/Button";
import {useEffect, useState} from "react";

const UpdateProduct = () => {

    const [loadedProduct, setLoadedProduct] = useState();
    const productId = useParams().productId;
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm({
        name: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        category: {
            value: '',
            isValid: false
        },
        price: {
            value: null,
            isValid: false
        },
        quantity: {
            value: null,
            isValid: false
        },
        image: {
            value: null,
            isValid: false
        }
    }, false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const responseData = await sendRequest(
                    `http://localhost:3002/api/products/${productId}`
                );

                setLoadedProduct(responseData.product);
                console.log(responseData.product);
                setFormData({
                    name: {
                        value: responseData.product.name,
                        isValid: true
                    },
                    description: {
                        value: responseData.product.description,
                        isValid: true
                    },
                    category: {
                        value: responseData.product.category,
                        isValid: false
                    },
                    price: {
                        value: responseData.product.price,
                        isValid: false
                    },
                    quantity: {
                        value: responseData.product.quantity,
                        isValid: false
                    }
                }, true);
            } catch (e) {
                console.log(e);
            }
        };
        fetchProducts();
    }, [sendRequest, productId, setLoadedProduct, setFormData]);


    const history = useHistory();
    const placeSubmitHandler = async event => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', formState.inputs.name.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('category', formState.inputs.category.value);
            formData.append('price', formState.inputs.price.value);
            formData.append('quantity', formState.inputs.quantity.value);

            await sendRequest(`http://localhost:3002/api/products/${productId}`,
                'PATCH',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    description: formState.inputs.description.value,
                    category: formState.inputs.category.value,
                    price: formState.inputs.price.value,
                    quantity: formState.inputs.quantity.value,
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            history.push('/admin/shop');
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <>

            <ErrorModal error={error} onClear={clearError}/>
            {!isLoading && loadedProduct && <form className="place-form" onSubmit={placeSubmitHandler} encType="multipart/form-data">

                {isLoading && <LoadingSpinner/>}
                <Input id="name"
                       element="input" type="text" label="Name"
                       validators={[VALIDATOR_REQUIRE()]}
                       errorText="Please enter a valid Name"
                       onInput={inputHandler}
                       initialValue={loadedProduct.name}
                       initialValid={true}/>

                <Input id="description"
                       element="textarea"
                       label="Description"
                       validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                       errorText="Please enter a valid description (at least 5 characters)."
                       onInput={inputHandler}
                       initialValue={loadedProduct.description}
                       initialValid={true}/>
                <Input id="category"
                       element="input"
                       label="Category"
                       validators={[VALIDATOR_REQUIRE()]}
                       errorText="Please enter a valid category."
                       onInput={inputHandler}
                       initialValue={loadedProduct.category}
                       initialValid={true}/>
                <Input id="price"
                       element="input"
                       label="Price"
                       validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                       errorText="Please enter a valid price."
                       onInput={inputHandler}
                       initialValue={loadedProduct.price}
                       initialValid={true}/>
                <Input id="quantity"
                       element="input"
                       label="Quantity"
                       validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                       errorText="Please enter a valid quantiy."
                       onInput={inputHandler}
                       initialValue={loadedProduct.quantity}
                       initialValid={true}/>



                <Button type="submit" disabled={!formState.isValid}>ADD
                    PRODUCT</Button>

            </form>}

        </>
    );
};

export default UpdateProduct;