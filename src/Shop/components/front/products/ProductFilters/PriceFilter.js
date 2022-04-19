import "../../../../assets/css/plugins/animate.min.css";
import "../../../../assets/css/main.scoped.css";
const priceFilter = () => {

    return (
        <div className="sidebar-widget price_range range mb-30">
            <h5 className="section-title style-1 mb-30">Fill by
                price</h5>
            <div className="price-filter">
                <div className="price-filter-inner">
                    <div id="slider-range"
                         className="mb-20"></div>
                    <div
                        className="d-flex justify-content-between">
                        <div className="caption">From: <strong
                            id="slider-range-value1"
                            className="text-brand"></strong>
                        </div>
                        <div className="caption">To: <strong
                            id="slider-range-value2"
                            className="text-brand"></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-group">
                <div className="list-group-item mb-10 mt-10">
                    <label className="fw-900">Color</label>
                    <div className="custome-checkbox">
                        <input className="form-check-input"
                               type="checkbox" name="checkbox"
                               id="exampleCheckbox1" value=""/>
                        <label className="form-check-label"
                               htmlFor="exampleCheckbox1"><span>Red (56)</span></label>
                        <br/>
                        <input className="form-check-input"
                               type="checkbox" name="checkbox"
                               id="exampleCheckbox2" value=""/>
                        <label className="form-check-label"
                               htmlFor="exampleCheckbox2"><span>Green (78)</span></label>
                        <br/>
                        <input className="form-check-input"
                               type="checkbox" name="checkbox"
                               id="exampleCheckbox3" value=""/>
                        <label className="form-check-label"
                               htmlFor="exampleCheckbox3"><span>Blue (54)</span></label>
                    </div>
                    <label className="fw-900 mt-15">Item
                        Condition</label>
                    <div className="custome-checkbox">
                        <input className="form-check-input"
                               type="checkbox" name="checkbox"
                               id="exampleCheckbox11" value=""/>
                        <label className="form-check-label"
                               htmlFor="exampleCheckbox11"><span>New (1506)</span></label>
                        <br/>
                        <input className="form-check-input"
                               type="checkbox" name="checkbox"
                               id="exampleCheckbox21" value=""/>
                        <label className="form-check-label"
                               htmlFor="exampleCheckbox21"><span>Refurbished (27)</span></label>
                        <br/>
                        <input className="form-check-input"
                               type="checkbox" name="checkbox"
                               id="exampleCheckbox31" value=""/>
                        <label className="form-check-label"
                               htmlFor="exampleCheckbox31"><span>Used (45)</span></label>
                    </div>
                </div>
            </div>
            <a href="shop-grid-right.html"
               className="btn btn-sm btn-default"><i
                className="fi-rs-filter mr-5"></i> Fillter</a>
        </div>
    );
};

export default priceFilter;