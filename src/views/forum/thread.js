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
import SectionThreadsContent from 'components/Forum/SectionThreadsContent';


function Thread()
{
    return(
        <>
        <HBNavbar /> 
        <div className="wrapper">
            <Container className="thread">
            <h4 className="thread-title">Section: Section Title</h4>
                <Container className="thread-content">
                    
                </Container>
            </Container>
            <HBFooter />
        </div>
        </>
    );
}

export default Thread;