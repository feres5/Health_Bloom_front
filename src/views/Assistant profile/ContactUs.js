import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import "../../assets/scss/magazine.scss";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {
  FormGroup,
  Input,
  Col,
  NavbarText, Row,
} from "reactstrap";
import jwt_decode from "jwt-decode";
import ContactHeader from "../../components/Headers/ContactHeader";
import {Avatar} from "antd";
import profilavatar from "../../Dashboard/assets/images/face-1.jpg";
import Form from "react-bootstrap/Form";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {Image} from "react-bootstrap";

function ContactUs() {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'Test', e.target, 'cUUoM7PnO7lnsxpvJ')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    e.target.reset()
  };


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

        <ContactHeader />
        <br/>
        <br/>
        <Row className="justify-content-md-center sharing-area text-center">
            <Col md={4}></Col>
        <Col className="text-center" md={4}>
          <h1>About Us</h1>
          <br/>
          <br/>

          <h4>Because Origin Matters</h4>
          <p>
            Founded by Binary Brains From Esprit engineering school.
            Targeting both the medical core and patients anywhere in the world.
            we propose an efficient and performant web application that matches
            patients and doctors according to symptoms and geographical location,
            our application provides privacy and security since it is based on the blockchain technology.
            Our selling points are the use of the revolutionary blockchain technology, ensuring that sensitive
            data of our patients are encrypted and stored in a decentralized manner.
            We will also be using artificial intelligence to efficiently match patients and doctors,
            allowing patients a smooth experience so they would reuse our platform.


          </p>

          <br/>
          <br/>

          <Row className="collections">
            <Col md="6">
              <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg1.jpg").default}
              ></img>
              <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
              ></img>
            </Col>
            <Col md="6">
              <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg8.jpg").default}
              ></img>
              <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg7.jpg").default}
              ></img>
            </Col>
          </Row>
          <br/>
          <br/>
          <h1>Contact Us</h1>
          <br/>
          <br/>
          <form ref={form} id="contact-form" onSubmit={sendEmail} method="POST">
            <div className="form-group">
              <label htmlFor="name"  >Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp"  name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="name"  >Subject</label>
              <input type="text" className="form-control" name="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message" >Message</label>
              <textarea className="form-control" rows="5" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <br/>
          <br/>

          <h1>Also You can find Us here </h1>
          <br/>
          <br/>

          <h1> Map Adam  </h1>
          <br/>
          <br/>

        </Col>
          <Col md={4}></Col>
  </Row>
        <row>

        </row>

      </div>
      <DarkFooter />
    </>
  );
}

export default ContactUs;

