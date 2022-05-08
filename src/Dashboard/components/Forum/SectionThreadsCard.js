import React from "react";


import {
    Container,
    Row,
    Col,
  } from "reactstrap";
  
  import { Link } from 'react-router-dom';

const SectionThreadsCard = (props) => 
{
    const thread = props.thread;

    return(
        <>
        <tr className='section-thread-table-row'> 
            <td>
                <Container className='section-thread-card'>
                    <Link className='section-thread-card-title' to={"/dashboard/forum/thread/"+thread._id}>{thread.title}</Link>
                    <Container  className='section-thread-card-infos'>
                        <span>By:</span>
                        <a>Foulen</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a>15-12-2021</a>
                    </Container>
                </Container>
            </td>
                <td>
                    52 Comments
                </td>
            <td>
                <Container  className='section-thread-card-infos'>
                        <span>By:</span>
                    <a>Foulen</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a>15-12-2021</a>
                </Container>
            </td>
        </tr>
        </>
    );
};

export default SectionThreadsCard;
