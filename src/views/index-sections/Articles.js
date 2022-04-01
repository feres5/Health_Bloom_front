import React from "react";
import Magazine from "./Magazine";
import styled from "styled-components";
import articles from "../../Magazine.json";
import {
    Container
} from "reactstrap";

export default function Articles(){
    //const[articles,err,reload]=useState(props.article);

    return(
        <>
            <div className="section section-basic" >
                <Container>
                    <h3 className="title">Magazine</h3>
                    <ProductsWrapper>
                        {
                            articles.map((article,index) => (
                                <Magazine article={article} key={index} ></Magazine>
                            ))
                        }
                    </ProductsWrapper>
                </Container>
            </div>
        </>
    );
}

const ProductsWrapper = styled.div `
  text-align: center;
  display: flex;
`
