import React, {useState} from "react";
import styled from "styled-components";

function Products(props){
    const [product]=useState(props.product);
    return(
        <>
            <ProductFrame className="col col-lg-3">
                <ProductImageWrapper>
                    <ProductImage src={product.img}></ProductImage>
                </ProductImageWrapper>
                <ProductInfoWrapper>
                    <span><h3>{product.name}</h3></span>
                    <span><h5>{product.price} $</h5></span>
                </ProductInfoWrapper>
            </ProductFrame>
        </>
    );

}
export default Products;

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgba(110, 110, 110, 0.2);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;
