import React from "react";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

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
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import ForumSection from "components/Forum/ForumSection";


function ForumWelcome() {
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
            <Container className="forum-welcome">
              
              <Container className="forum-links-container">
                <span className="form-chack-sign"></span>
                <Link className="forum-link" to={"#"}>Profile</Link>
                <span className="button-bar"></span>
                <Link className="forum-link" to={"#"}>Notification</Link>
              </Container>

              <ForumSection topics={[0,0,0,0,0,0]}></ForumSection>
              <ForumSection topics={[0,0,0,0,0,0]}></ForumSection>
              <ForumSection topics={[0,0,0,0,0,0]}></ForumSection>
            </Container>
          <DarkFooter />
        </div>
      </>
    );
  }

  export default ForumWelcome;

  /*import React from "react";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// reactstrap components
import {
  Container,
} from "reactstrap";
import ForumSection from "components/Forum/ForumSection";

function ForumWelcome() {
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
    const list = [1,2,3,4,5];
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
            <Container className="forum-welcome">
              <ForumSection topics={list}></ForumSection>
            </Container>
          <DarkFooter />
        </div>
      </>
    );
  }

  export default ForumWelcome;*/