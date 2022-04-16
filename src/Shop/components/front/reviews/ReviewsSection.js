import OverallRating from "./OverallRating";
import AddReview from "./AddReview";
import ReviewItem from "./ReviewItem";

const ReviewsSection = () => {

    return (
        <div className="tab-pane fade" id="Reviews">
            <div className="comments-area">
                <div className="row">
                    <div className="col-lg-8">
                        <h4 className="mb-30">Customer
                            questions & answers</h4>
                        <div
                            className="comment-list">
                            <ReviewItem/>
                        </div>
                    </div>
                    <OverallRating/>
                </div>
            </div>

            <AddReview/>
        </div>);
};

export default ReviewsSection;