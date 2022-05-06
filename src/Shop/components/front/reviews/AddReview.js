import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";

import {Rating} from 'react-simple-star-rating'
import {useContext, useState} from "react";
import {useHttpClient} from "../../../../shared/hooks/http-hook";
import {useForm} from "../../../../shared/hooks/form-hook";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../../../shared/util/validators";
import ReviewInput
    from "../../../../shared/components/FormElements/ReviewInput";
import {ReviewContext} from "../../../context/ReviewContext";


const AddReview = props => {

    const reviewContext = useContext(ReviewContext);
    const token = localStorage.getItem("user_info");
    let disabled = false;

    const [rating, setRating] = useState(1);

    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm({
        name: {
            value: '',
            isValid: false
        },
        message: {
            value: '',
            isValid: false
        },
        email: {
            value: null,
            isValid: false
        },
    }, false);


    const reviewButton = token ?
        (
            <div
                className="form-group">
                <button
                    type="submit"
                    disabled={!formState.isValid}
                    className="button button-contactForm">Submit
                    Review
                </button>
            </div>
        ) :
        (
            <div
                className="form-group">
                <button
                    type="submit"
                    disabled={true}
                    className="button button-contactForm">Submit
                    Review
                </button>
            </div>
        )
    const placeSubmitHandler = async event => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', formState.inputs.name.value);
            formData.append('message', formState.inputs.message.value);
            formData.append('email', formState.inputs.email.value);
            formData.append('date', new Date().toDateString());
            formData.append('rating', rating);
            formData.append('product', props.productId);

            await sendRequest('http://localhost:3002/api/reviews',
                'POST',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    message: formState.inputs.message.value,
                    email: formState.inputs.email.value,
                    date: new Date().toDateString(),
                    rating: rating,
                    product: props.productId,
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
        } catch (e) {
            console.log(e);
        }

        setRating(1);
        props.reviewsHandler(true);
        props.refresh(prevState => !prevState);

    };


    const handleRating = (rate) => {
        setRating(rate / 20)
        // other logic
    }
    return (
        <div className="comment-form">
            <h4 className="mb-15">Add a
                review</h4>
            <Rating onClick={handleRating} ratingValue={rating}/>
            <div className="row">
                <div
                    className="col-lg-8 col-md-12">
                    <form onSubmit={placeSubmitHandler}
                          className="form-contact comment_form"
                          id="commentForm">
                        <div className="row">
                            <div
                                className="col-12">
                                <div
                                    className="form-group">
                                    <ReviewInput id="message"
                                                 element="textarea"
                                                 label="message"
                                                 validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                                                 errorText="Please enter a valid comment (at least 5 characters)."
                                                 onInput={inputHandler}/>
                                </div>
                            </div>
                            <div
                                className="col-sm-6">
                                <div
                                    className="form-group">
                                    <ReviewInput id="name"
                                                 element="input" type="text"
                                                 label="Name"
                                                 validators={[VALIDATOR_REQUIRE()]}
                                                 errorText="Please enter a valid Name"
                                                 placeholder="Name"
                                                 onInput={inputHandler}/>
                                </div>
                            </div>
                            <div
                                className="col-sm-6">
                                <div
                                    className="form-group">
                                    <ReviewInput id="email"
                                                 element="input" type="text"
                                                 label="Email"
                                                 validators={[VALIDATOR_EMAIL()]}
                                                 errorText="Please enter a valid Email"
                                                 placeholder="Email"
                                                 onInput={inputHandler}/>
                                </div>
                            </div>
                        </div>
                        {reviewButton}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
