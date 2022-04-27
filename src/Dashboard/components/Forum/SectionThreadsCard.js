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
                        <span>By:</span> <Link to={"#"}>Foulen</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={"#"}>{thread.dateCreated != null ?  thread.dateCreated : 'No date'}</Link>
                    </Container>
                </Container>
            </td>
                <td>
                    {thread.comments.length} Replies
                </td>
            <td>
                <Container  className='section-thread-card-infos'>
                        <span>By:</span> <Link to={"#"}>Foulen</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link>{ thread.comments[thread.comments.length-1]  != null? thread.comments[thread.comments.length-1].dateCreated : 'No data'}</Link>
                </Container>
            </td>
        </tr>
        </>
    );
};

export default SectionThreadsCard;