
import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Row,
    Col,
  } from "reactstrap";

const ForumSectionTopic  = (props) => 
{
    return (
        <>
        <Container className="section-topic-card">
            <img className="section-topic-card-img" src={require("assets/img/topic_icon_general.png").default}  alt="Icon" width={40}/>
            <Link className="section-topic-card-title" to="/forum/section/1">This is topic title</Link>
            <p className="section-topic-card-description">This is top description.This is top description.This is top description.</p>
        </Container>
        </>
    );
}

export default ForumSectionTopic;
