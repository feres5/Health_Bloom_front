
import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Row,
    Col,
  } from "reactstrap";

const ForumSectionTopic  = (props) => 
{
    const section = props.section;

    return (

        <>
        <Container className="section-topic-card">
            <img className="section-topic-card-img" src={require("assets/img/topic_icon_general.png").default}  alt="Icon" width={40}/>
            <Link className="section-topic-card-title" to={`/forum/section/`+section._id}>{section.title}</Link>
            <p className="section-topic-card-description">{section.description}</p>
        </Container>
        </>
    );
}

export default ForumSectionTopic;
