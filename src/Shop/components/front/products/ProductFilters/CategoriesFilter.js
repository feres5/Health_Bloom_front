import "../../../../assets/css/plugins/animate.min.css";
import "../../../../assets/css/main.scoped.css";
const CategoriesFilter = () => {

    return (
        <div className="sidebar-widget widget-category-2 mb-30">
            <h5 className="section-title style-1 mb-30">Category</h5>
            <ul>
                <li>
                    <a href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-1.svg"
                        alt=""/>Milks & Dairies</a><span
                    className="count">30</span>
                </li>
                <li>
                    <a href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-2.svg"
                        alt=""/>Clothing</a><span
                    className="count">35</span>
                </li>
                <li>
                    <a href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-3.svg"
                        alt=""/>Pet Foods </a><span
                    className="count">42</span>
                </li>
                <li>
                    <a href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-4.svg"
                        alt=""/>Baking material</a><span
                    className="count">68</span>
                </li>
                <li>
                    <a href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-5.svg"
                        alt=""/>Fresh Fruit</a><span
                    className="count">87</span>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesFilter;