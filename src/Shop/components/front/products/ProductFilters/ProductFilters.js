import "../../../../assets/css/plugins/animate.min.css";
import "../../../../assets/css/main.scoped.css";
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import NewProductsFilter from "./NewProductsFilter";
import BannerFilter from "./BannerFilter";

const ProductFilters = props => {

    return (
        <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
            <CategoriesFilter
                items={props.items}
                onClick={props.onClick}
            />
            <NewProductsFilter />
            <BannerFilter />
        </div>

    );
};

export default ProductFilters;