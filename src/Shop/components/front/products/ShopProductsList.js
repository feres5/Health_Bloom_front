import ShopProductsItem from "./ShopProductsItem";
import React from "react";
import ShopProductsItemGrid from "./HomeProductItemGrid";


const ShopProductsList = props => {


    return (
        <>
            {props.grid &&
                <>
                    {
                        props.items.map(product => (
                            <ShopProductsItem
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                item={product}
                            />
                        ))

                    }
                </>}
            {!props.grid &&
                <>
                    {
                        props.items.map(product => (
                            <ShopProductsItemGrid
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                item={product}
                            />
                        ))

                    }
                </>}
        </>
    );
};

export default ShopProductsList;