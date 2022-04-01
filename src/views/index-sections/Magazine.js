import React, {useState} from "react";
import styled from "styled-components";
import {
    Nav,
    NavItem,
    NavLink,CardHeader, CardBody, TabContent, TabPane, Card,
} from "reactstrap";

function Magazine(props){

    const [article] = useState(props.article);

    const [iconPills, setIconPills] = React.useState("1");
    return(
        <>
            <Card style={{margin : "10px"}}>
                <CardHeader>

                        <ProductImageWrapper>
                            <ProductImage src={require("assets/img/ryan.jpg").default}></ProductImage>
                        </ProductImageWrapper>
                    <Nav className="justify-content-center" role="tablist" tabs>
                        <NavItem>
                            <NavLink
                                className={iconPills === "1" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIconPills("1");
                                }}
                            >
                                {article.title}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                    <TabContent
                        className="text-center"
                        activeTab={"iconPills" + iconPills}
                    >
                        <TabPane tabId="iconPills1">
                            <p>{article.description}</p>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>

            {/*<ProductFrame className="col col-lg-3">*/}
            {/*    <ProductImageWrapper>*/}
            {/*        <ProductImage src={require("assets/img/ryan.jpg").default}></ProductImage>*/}
            {/*    </ProductImageWrapper>*/}
            {/*    <ProductInfoWrapper>*/}
            {/*        <span><h3>{article.title}</h3></span>*/}
            {/*        <span><h5>{article.description}</h5></span>*/}
            {/*    </ProductInfoWrapper>*/}
            {/*</ProductFrame>*/}
        </>
    );
}
export default Magazine;

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
