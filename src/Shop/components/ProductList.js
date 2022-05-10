import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './ProductsList.css';
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";

const ProductsList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Products found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <Row xs={1} md={4} className="gx-2">
            {props.items.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    onDelete={props.onDeleteProduct}
                />
            ))}
        </Row>
    );
};

export default ProductsList;