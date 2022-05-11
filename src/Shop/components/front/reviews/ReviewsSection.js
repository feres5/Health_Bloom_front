import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
import OverallRating from "./OverallRating";
import AddReview from "./AddReview";
import ReviewItem from "./ReviewItem";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useHttpClient} from "../../../../shared/hooks/http-hook";
import ShopProductsItem from "../products/ShopProductsItem";

const ReviewsSection = props => {
    const [loadedReviews, setLoadedReviews] = useState([]);
    const [onChange, setOnChange] = useState(false);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    useEffect(() => {

        const fetchReviews = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BackEnd_url+`/api/reviews/product/${props.productId}`
                );

                setLoadedReviews(responseData.reviews);
                setOnChange(false);
            } catch (e) {
                console.log(e);
            }
        };
        fetchReviews();

    }, [sendRequest, onChange]);
    return (
        <div className="tab-pane fade show active" id="Reviews">
            <div className="comments-area">
                <div className="row">
                    <div className="col-lg-8">
                        <h4 className="mb-30">Customer
                            questions & answers</h4>
                        <div
                            className="comment-list">
                            {!isLoading && loadedReviews &&
                                loadedReviews.map(review => (
                                    <ReviewItem
                                        key={review.id}
                                        id={review.id}
                                        name={review.name}
                                        message={review.message}
                                        rating={review.rating * 20}
                                        date={review.date}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <OverallRating star1={props.star1}
                                   refresh={props.refresh}
                                   star2={props.star2}
                                   star3={props.star3}
                                   star4={props.star4}
                                   star5={props.star5}
                                   average={props.average}
                                   total={props.total}
                    />
                </div>
            </div>

            <AddReview refresh={props.refresh} key={loadedReviews.length} reviewsHandler={setOnChange}
                       productId={props.productId}/>
        </div>);
};

export default ReviewsSection;
