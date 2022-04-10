import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Row,
    Col,
  } from "reactstrap";

import ForumSectionTopic from "./ForumSectionTopic";

const ForumSection  = (props) => 
{
    var tops = [];
    for (let i = 0; i < props.topics.length/2; i++) {

        const sub_arr = props.topics.slice(i*2,i*2+2);

        const cols = sub_arr.map((item) => 
            <Col> <ForumSectionTopic section={item} ></ForumSectionTopic> </Col>
        )

        tops.push(
        <Row>
            {cols}
        </Row>);
    }

    return (
        <>
            <Container className="forum-section">
                <h4 className="forum-section-title">_______________________________________________________________________________</h4>
                    <Container className="forum-section-content">
                        {tops}
                    </Container>
            </Container>
        </>
    );
}

export default ForumSection;
