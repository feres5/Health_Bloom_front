import React from "react";
import { Link } from "react-router-dom";

import {
    Card,
    Col,
    Row,
    Typography,
    Tooltip,
    Progress,
    Upload,
    message,
    Button,
    Timeline,
    Radio,
  } from "antd";

import ForumSectionTopic from "./ForumSectionTopic";

const ForumSection  = (props) => 
{
    var tops = [];
    var ind_row = props.topics.length + 1;
    for (let i = 0; i < props.topics.length/2; i++) {

        const sub_arr = props.topics.slice(i*2,i*2+2);

        const cols = sub_arr.map((item, index) => 
            <Col key={index} span={24/2}> <ForumSectionTopic section={item} ></ForumSectionTopic> </Col>
        )

        tops.push(
        <Row key={ind_row}>
            {cols}
        </Row>);
        ind_row ++;
    }

    return (
        <>
            <div className="forum-section">
                 
                <Card title='  ' size='small' headStyle={{ backgroundColor:'skyblue',minHeight:0 }} className="forum-section-content">
                    {tops}
                </Card>

            </div>
        </>
    );
}

export default ForumSection;
