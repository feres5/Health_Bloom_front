const overallRating = () => {

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
                        style={{width: "90%"}}></div>
                </div>
                <h6>4.8 out of 5</h6>
            </div>
            <div className="progress">
                <span>5 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "50%"}}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100">50%
                </div>
            </div>
            <div className="progress">
                <span>4 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "25%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">25%
                </div>
            </div>
            <div className="progress">
                <span>3 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "45%"}}
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100">45%
                </div>
            </div>
            <div className="progress">
                <span>2 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "85%"}}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100">65%
                </div>
            </div>
            <div
                className="progress mb-30">
                <span>1 star</span>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "85%"}}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100">85%
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