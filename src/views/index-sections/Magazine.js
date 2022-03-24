import React from "react";
import styled from "styled-components";
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

function Magazine(){
    return(
        <>
            <div className="section section-basic" >
                <Container>
                    <h3 className="title">Magazine</h3>
                    <Row>
                        <ProductFrame className="col col-lg-3">
                            <ProductImageWrapper>
                                <ProductImage src={require("assets/img/ryan.jpg").default}></ProductImage>
                            </ProductImageWrapper>
                            <ProductInfoWrapper>
                                <span><h3>post title</h3></span>
                                <span><h5>details</h5></span>
                            </ProductInfoWrapper>
                        </ProductFrame>
                        <ProductFrame className="col col-lg-3">
                            <ProductImageWrapper>
                                <ProductImage src={require("assets/img/ryan.jpg").default}></ProductImage>
                            </ProductImageWrapper>
                            <ProductInfoWrapper>
                                <span><h3>post title</h3></span>
                                <span><h5>details</h5></span>
                            </ProductInfoWrapper>
                        </ProductFrame>
                        <ProductFrame className="col col-lg-3">
                            <ProductImageWrapper>
                                <ProductImage src={require("assets/img/ryan.jpg").default}></ProductImage>
                            </ProductImageWrapper>
                            <ProductInfoWrapper>
                                <span><h3>post title</h3></span>
                                <span><h5>details</h5></span>
                            </ProductInfoWrapper>
                        </ProductFrame>
                    </Row>

                </Container>
            </div>
        </>
    );
}
export default Magazine;

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
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

