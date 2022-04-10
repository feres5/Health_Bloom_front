/*eslint-disable*/
import React from "react";

// reactstrap components
import {Button, Col, Container, Row, UncontrolledTooltip} from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="justify-content-md-center sharing-area text-center">
          <Col className="text-center" lg="8" md="12">
            <h3>Thank you for supporting us!</h3>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://www.twitter.com/creativetim?ref=creativetim"
                id="tooltip86114138"
                size="lg"
                target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip86114138">
              Follow us
            </UncontrolledTooltip>
            <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/creativetim?ref=creativetim"
                id="tooltip735272548"
                size="lg"
                target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip735272548">
              Like us
            </UncontrolledTooltip>
            <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim"
                id="tooltip647117716"
                size="lg"
                target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip647117716">
              Follow us
            </UncontrolledTooltip>
            <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                id="tooltip331904895"
                size="lg"
                target="_blank"
            >
              <i className="fab fa-github"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip331904895">
              Star on Github
            </UncontrolledTooltip>
          </Col>
        </Row>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Binary Brains
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Created by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Binary Brains
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
