import {React,useState,useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


const ThreadContentCard = (props) => 
{

    return(
        <>
        <Container className='thread-content-card'>
            <Row>
                <Col className='thread-profile-info' sm="3">
                    <Container>
                        <img src= {require("assets/img/eva.jpg").default}  alt="" />
                        <Link to={"#"}>Doctor Profile Name</Link>
                        <h5>Badge Specialite</h5>
                    </Container>
                    
                </Col>
                <Col className='thread-comment-content' sm="9">
                <h3>{props.thread.title}</h3>
                <p>
                    {props.initContent.body}
                </p></Col>
            </Row>
            {props.comments.map((item) => { return(
            <Row>
                <Col className='thread-profile-info' sm="3">
                    <Container>
                        <img src= {require("assets/img/eva.jpg").default}  alt="" />
                        <Link to={"#"}>Doctor Profile Name</Link>
                        <h5>Badge Specialite</h5>
                    </Container>
                    
                </Col>
                <Col className='thread-comment-content' sm="9">
                <p>____________________________________________________________</p>
                <p>
                    {item.body}
                </p></Col>
            </Row>
            
            ) })}
            
        </Container>
        </>
    );
};
 
export default ThreadContentCard;