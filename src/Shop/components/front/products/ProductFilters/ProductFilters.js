import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import NewProductsFilter from "./NewProductsFilter";
import BannerFilter from "./BannerFilter";

const ProductFilters = () => {

    return (
        <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
            <CategoriesFilter/>
            <PriceFilter />
            <NewProductsFilter />
            <BannerFilter />
        </div>

    );
};

export default ProductFilters;