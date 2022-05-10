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
    //alert(JSON.stringify(thread))
    return(
        <>
        <tr className='section-thread-table-row'> 
            <td>
                <Container className='section-thread-card'>
                    <Link className='section-thread-card-title' to={"/dashboard/forum/thread/"+thread._id}>{thread.title}</Link>
                    <Container  className='section-thread-card-infos'>
                        <span>By:</span> <a href="#">{thread.user ? thread.user.FirstName + " " + thread.user.LastName : ""}</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">{thread.dateCreated != null ?  thread.dateCreated : 'No date'}</a>
                    </Container>
                </Container>
            </td>
                <td>
                    {thread.comments.length} Replies
                </td>
            <td>
                <Container  className='section-thread-card-infos'>
                        <span>By:</span> <a href="#">{thread.comments[thread.comments.length-1]  != null && thread.comments[thread.comments.length-1].user  != null? thread.comments[thread.comments.length-1].user.FirstName + " " + thread.comments[thread.comments.length-1].user.LastName : ""}</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">{ thread.comments[thread.comments.length-1]  != null? thread.comments[thread.comments.length-1].dateCreated : 'No data'}</a>
                </Container>
            </td>
        </tr>
        </>
    );
};

export default SectionThreadsCard;