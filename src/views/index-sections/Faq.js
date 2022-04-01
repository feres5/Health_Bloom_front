import React, {useState} from "react";
import styled from "styled-components";
import {
    Row,
    Col
} from "reactstrap";

export default function Faq(props){
    const [subject]=useState(props.subject)

    return(
        <Frame  className="col-sm-3">
            <TitleFrame >
                <span>{subject.field}</span>
            </TitleFrame>
            <Row>
                {
                    subject.Posts.map(post => (
                        <Col className="bg-light border">
                            {post.question}
                        </Col>
                    ))
                }

            </Row>
        </Frame>
    );

}

const TitleFrame = styled.div`
  min-height: 50px;
  //min-width: 270px;
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  & > span {
    text-align: center ;
    
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
`
