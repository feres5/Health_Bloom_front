import "../../../assets/css/plugins/animate.min.css";
import "../../../assets/css/main.scoped.css";

const reviewItem = props => {

    return (
        <div
            className="single-comment justify-content-between d-flex mb-30">
            <div
                className="user justify-content-between d-flex">
                <div
                    className="thumb text-center">
                    <img
                        src="assets/imgs/blog/author-2.png"
                        alt=""/>
                    <a href="#"
                       className="font-heading text-brand">{props.name}</a>
                </div>
                <div
                    className="desc">
                    <div
                        className="d-flex justify-content-between mb-10">
                        <div
                            className="d-flex align-items-center">
                            <span
                                className="font-xs text-muted">{props.date}</span>
                        </div>
                        <div
                            className="product-rate d-inline-block">
                            <div
                                className="product-rating"
                                style={{width: `${props.rating}%`}}></div>
                        </div>
                    </div>
                    <p className="mb-10">{props.message} <a
                            href="#"
                            className="reply">Reply</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default reviewItem;