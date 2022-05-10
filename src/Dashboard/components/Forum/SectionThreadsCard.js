import React from "react";


import {
    Container,
    Row,
    Col,
  } from "reactstrap";
  
  import { Link } from 'react-router-dom';
import { LinkedCamera } from "@mui/icons-material";

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
                        <span>By:</span> <Link to={props.thread.user ? `/doctor/front-profile/${props.thread.user._id}` : "/dashboard"}> {props.thread.user ? props.thread.user.FirstName + " " + props.thread.user.LastName : ""} </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i>{thread.dateCreated != null ?  thread.dateCreated : 'No date'}</i>
                    </Container>
                </Container>
            </td>
                <td>
                    {thread.comments.length} Replies
                </td>
            <td>
                <Container  className='section-thread-card-infos'>
                        <span>By:</span> <Link to={props.thread.user ? `/doctor/front-profile/${props.thread.user._id}` : "/dashboard"}>{thread.comments[thread.comments.length-1]  != null && thread.comments[thread.comments.length-1].user  != null? thread.comments[thread.comments.length-1].user.FirstName + " " + thread.comments[thread.comments.length-1].user.LastName : ""}</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i>{ thread.comments[thread.comments.length-1]  != null? thread.comments[thread.comments.length-1].dateCreated : 'No replies'}</i>
                </Container>
            </td>
        </tr>
        </>
    );
};

export default SectionThreadsCard;