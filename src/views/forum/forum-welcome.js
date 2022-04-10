import {React, useEffect, useState} from "react";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

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

    const [sections, setSections] = useState([])

    const fetchSections = async () => {
      const url = "http://localhost:3002/forum/get-sections";
      //const urlId= url+idArticle
      const reponse = await fetch(url);
      const newSections = await reponse.json();
      setSections(newSections);
    }
    useEffect(() => {
      fetchSections()
    }, [])


    /*React.useEffect(() => {
      document.body.classList.add("index-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("index-page");
        document.body.classList.remove("sidebar-collapse");
      };
    });*/
    return (
      <>
        <IndexNavbar /> 
        <div className="wrapper">
            <Container className="forum-welcome">
              
              <Container className="forum-links-container">
               
                <Link className="forum-link" to={"#"}>
                  <FontAwesomeIcon icon={solid('user')} size="lg" />Profile
                </Link>
                
                <Link className="forum-link" to={"#"}>
                  <FontAwesomeIcon icon={solid('bell')} size="lg" />Notifications
                </Link>
              </Container>

              <ForumSection topics={sections}></ForumSection>

            </Container>
          <DarkFooter />
        </div>
      </>
    );
  }

  export default ForumWelcome;