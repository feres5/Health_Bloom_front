import React, {useState} from "react";
import Magazine from "./Magazine";
import styled from "styled-components";
import articles from "../../Magazine.json";
import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
