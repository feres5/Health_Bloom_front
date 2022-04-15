import {React, useEffect, useState} from "react";
//import { useHistory  } from "react-router-dom";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  Container,
  Form
} from "reactstrap";
import { Link } from "react-router-dom";
import ForumSection from './../../components/Forum/ForumSection'

const axios = require('axios');


function CreateThread() {

    useEffect(() => {
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

    //const history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
        // get our form data out of state
        const title =  e.target.elements.title.value;
        const body =  e.target.elements.body.value;
        axios.post("http://localhost:3002/forum/create-thread", {title, body }).then((res) => {
            console.log(res.data)
            //history.push("/forum/section/1");
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
      <>

        <div className="wrapper">
            <Container className="forum-create-thread">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label for="threadTitle">Title</Label>
                    <Input type="text" name="title" id="threadTitle" placeholder="" />
                    </FormGroup>

                    <FormGroup>
                    <Label for="threadBody"></Label>
                    <Input type="textarea" name="body" id="threadBody" />
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>

            </Container>

        </div>
      </>
    );
  }

  export default CreateThread;