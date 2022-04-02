import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function MagazineHeader() {
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
      <div className="page-header clear-filter page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header2.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
           <Container>
            <h1 className="title">Welcome to your favorite medical magazine.</h1>
            <div className="text-center">
              <Button
                className="btn btn-success"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              > Subscribe to our NewsLetter
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MagazineHeader;
