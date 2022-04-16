const reviewItem = () => {

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
                       className="font-heading text-brand">Sienna</a>
                </div>
                <div
                    className="desc">
                    <div
                        className="d-flex justify-content-between mb-10">
                        <div
                            className="d-flex align-items-center">
                                                                            <span
                                                                                className="font-xs text-muted">December 4, 2021 at 3:12 pm </span>
                        </div>
                        <div
                            className="product-rate d-inline-block">
                            <div
                                className="product-rating"
                                style={{width: "100%"}}></div>
                        </div>
                    </div>
                    <p className="mb-10">Lorem
                        ipsum
                        dolor
                        sit
                        amet,
                        consectetur
                        adipisicing
                        elit.
                        Delectus,
                        suscipit
                        exercitationem
                        accusantium
                        obcaecati
                        quos
                        voluptate
                        nesciunt
                        facilis
                        itaque
                        modi
                        commodi
                        dignissimos
                        sequi
                        repudiandae
                        minus ab
                        deleniti
                        totam
                        officia
                        id
                        incidunt? <a
                            href="#"
                            className="reply">Reply</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default reviewItem;