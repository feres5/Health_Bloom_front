/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header2.jpg").default + ")",
          }}
          ref={pageHeader}
        > </div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logoNav.png").default}
            ></img>
            <h1 className="h1-seo" style={{color: "white",fontFamily: "helvetica"}}>Welcome to Health Bloom</h1>
            <h3 style={{color: "white",fontFamily: "helvetica"}}>Here we can help you find the right doctor in a heartbeat</h3>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
