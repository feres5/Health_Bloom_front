import {React , useEffect, useState} from 'react';

import {
    Container,
    Row,
    Col,
  } from "reactstrap";

import ReactPaginate from 'react-paginate';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DarkFooter from 'components/Footers/DarkFooter';
import { Link } from 'react-router-dom';
import HBFooter from 'components/Footers/HBFooter';
import HBNavbar from 'components/Navbars/HBNavbar';
import ThreadContentCard from 'components/Forum/ThreadContentCard'

function Thread()
{
    return(
        <>
        <HBNavbar /> 
        <div className="wrapper">
            <Container className="thread">
                <Row className="thread-title-row">
                    <Col  sm="3">
                    </Col>

                    <Col sm="9">
                        <h4 className="thread-title">Section: Section Title</h4>
                    </Col>
                </Row>

                <Container className="thread-content">
                    <ThreadContentCard></ThreadContentCard>
                </Container>
            </Container>
            <HBFooter />
        </div>
        </>
    );
}

export default Thread;