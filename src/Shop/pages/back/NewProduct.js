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
import {useHistory} from "react-router-dom";
import Button from "../../../shared/components/FormElements/Button";

const NewProduct = () => {


    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [formState, inputHandler] = useForm({
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
            formData.append('image', formState.inputs.image.value);
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]);
            }
            await sendRequest('http://localhost:3002/api/products',
                'POST',
                formData
            );
            history.push('/admin/shop');
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <>

            <ErrorModal error={error} onClear={clearError}/>
            <form className="place-form" onSubmit={placeSubmitHandler} encType="multipart/form-data">

                {isLoading && <LoadingSpinner/>}
                <Input id="name"
                       element="input" type="text" label="Name"
                       validators={[VALIDATOR_REQUIRE()]}
                       errorText="Please enter a valid Name"
                       onInput={inputHandler}/>

                <Input id="description"
                       element="textarea"
                       label="Description"
                       validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                       errorText="Please enter a valid description (at least 5 characters)."
                       onInput={inputHandler}/>
                <Input id="category"
                       element="input"
                       label="Category"
                       validators={[VALIDATOR_REQUIRE()]}
                       errorText="Please enter a valid category."
                       onInput={inputHandler}/>
                <Input id="price"
                       element="input"
                       label="Price"
                       validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                       errorText="Please enter a valid price."
                       onInput={inputHandler}/>
                <Input id="quantity"
                       element="input"
                       label="Quantity"
                       validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                       errorText="Please enter a valid quantiy."
                       onInput={inputHandler}/>
                <ImageUpload id="image" onInput={inputHandler}
                             errorText="Please prove an image"/>


                <Button type="submit" disabled={!formState.isValid}>ADD
                    PRODUCT</Button>

            </form>

        </>
    );
};

export default NewProduct;