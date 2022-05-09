import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";
const overallRating = props => {

    return (
        <div className="col-lg-4">
            <h4 className="mb-30">Customer
                reviews</h4>
            <div
                className="d-flex mb-30">
                <div
                    className="product-rate d-inline-block mr-15">
                    <div
                        className="product-rating"
                        style={{width: `${props.average * 20}%`}}></div>
                </div>
                <h6>{props.average} out of 5</h6>
            </div>
            <div className="progress">
                <span>5 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: `${props.star5 /props.total * 100}%`}}
                    aria-valuenow={(props.star5 / props.total * 100).toFixed(0)}
                    aria-valuemin="0"
                    aria-valuemax="100">{(props.star5 / props.total * 100).toFixed(0)}%
                </div>
            </div>
            <div className="progress">
                <span>4 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: `${props.star4 /props.total * 100}%`}}
                    aria-valuenow={(props.star4 / props.total * 100).toFixed(0)}
                    aria-valuemin="0"
                    aria-valuemax="100">{(props.star4 / props.total * 100).toFixed(0)}%
                </div>
            </div>
            <div className="progress">
                <span>3 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: `${props.star3 /props.total * 100}%`}}
                    aria-valuenow={(props.star3 / props.total * 100).toFixed(0)}
                    aria-valuemin="0"
                    aria-valuemax="100">{(props.star3 / props.total * 100).toFixed(0)}%
                </div>
            </div>
            <div className="progress">
                <span>2 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: `${props.star2 /props.total * 100}%`}}
                    aria-valuenow={(props.star2 / props.total * 100).toFixed(0)}
                    aria-valuemin="0"
                    aria-valuemax="100">{(props.star2 / props.total * 100).toFixed(0)}%
                </div>
            </div>
            <div
                className="progress mb-30">
                <span>1 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width:`${props.star1 /props.total * 100}%`}}
                    aria-valuenow={(props.star1 / props.total * 100).toFixed(0)}
                    aria-valuemin="0"
                    aria-valuemax="100">{(props.star1 / props.total * 100).toFixed(0)}%
                </div>
            </div>
            <a href="#"
               className="font-xs text-muted">How
                are ratings
                calculated?</a>
        </div>
    );
};
export default overallRating;