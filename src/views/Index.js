import React from "react";

// reactstrap components
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
  Card,
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

import styled from "styled-components";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import Search from "./index-sections/Search";
import Magazine from "./index-sections/Magazine";
import Products from "./index-sections/Products";
import Articles from "./index-sections/Articles";
import Faq from "./index-sections/Faq";

//json data to be replaced when backend is ready
import articles from "../Magazine.json";
import products from "../products.json"
import subject from "../FAQ.json"

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Search/>

          {/*articles section from magazine*/}
          <div className="section section-basic" >
            <Container>
              <Row style={{display : "flex"}}>
                  <h3 className="title">Magazine</h3>
                  <Button className="btn-round" style={{marginLeft:"auto", height:"50px" }} color="info" outline type="button">More Articles</Button>

              </Row>
              <ProductsWrapper>
                {
                  articles.map((article,index) => (
                      <Magazine article={article} key={index} ></Magazine>
                  ))
                }
              </ProductsWrapper>
            </Container>
          </div>

          {/*ask a medical question*/}
          <div className="section section-tabs" >
            <Container>
              <Row style={{display : "flex"}}>
                <h3 className="title">Medical questions</h3>
                <Button className="btn-round" style={{marginLeft:"auto", height:"50px" }} color="primary" outline type="button">Ask question ?</Button>
                <Button className="btn-round" style={{height:"50px" }} color="success" outline type="button">Find an answer</Button>

              </Row>
              <Row >
              {
                subject.map((subject,index) => (
                    <Faq subject={subject} key={index}></Faq>
                ))
              }
              </Row>
            </Container>
          </div>

          {/*products section from shop */}
          <div className="section section-basic" >
            <Container>
              <h3 className="title">Products</h3>
              <ProductsWrapper>
                {
                  products.map((product,index) =>(
                      <Products product={product} key={index} ></Products>
                  ))
                }
              </ProductsWrapper>
            </Container>
          </div>




          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />

        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;

const ProductsWrapper = styled.div `
  text-align: center;
  display: flex;
`
