import {React,useState,useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
//import { Button } from 'antd';
import { Checkbox, Button, IconButton} from '@mui/material';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ThreadContentCard = (props) => 
{
    //const [comments,setComments] = useState([])
    const {id}= useParams()
    const history = useHistory()
    
    useEffect(() => {
        //setComments(props.comments)
    }, [props.comments]);

    const OnDeleteThread = (id) => 
    {
        const url = 'http://localhost:3002/forum/delete-thread/'
        const urlId = url + id;
        axios.delete(urlId).then(() => {
            history.push("/dashboard/forum/section/" + props.thread.section);
            
        })
    }

    const OnDeleteComment = (commentId) => {

        const url = 'http://localhost:3002/forum/delete-comment-from-thread/'
        const urlId = url + commentId;
        axios.delete(urlId).then(() => {
                    props.onCommentDelete(commentId)
        })
    }

    const OnCommentLike = (event,userId, commentId) => {
        if(event.target.checked)
        {
            const url = 'http://localhost:3002/forum/add-like-to-comment'
            
                axios.post(url,{commentId:commentId, userId:userId }).then(() => {
                    
                    props.onCommentLike()

                    
            }).catch((err) => {

            })
        }
        else
        {
            const url = 'http://localhost:3002/forum/delete-like-from-comment/'
            const urlId = url + userId + "/" + commentId ;
            axios.delete(urlId).then(() => {
                props.onCommentLike()
                
            })
               
        }
        
        
      };

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
                </p>
                <div className='thread-comment-control'>
                <i>created on : {props.initContent.dateCreated}</i>

                    <IconButton onClick={() => {OnDeleteThread(id)} }><DeleteIcon /></IconButton>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}  sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} checked={props.initContent.likes != null && props.initContent.likes.length > 0} onChange={ (event) =>{ OnCommentLike(event,1,props.initContent._id) }} />
                </div>
                </Col>
            </Row>
            {props.comments.map((item) => { return(
            <Row key={item._id}>
                <Col className='thread-profile-info' sm="3">
                    <Container>
                        <img src= {require("assets/img/eva.jpg").default}  alt="" />
                        <Link to={"#"}>Doctor Profile Name</Link>
                        <h5>Badge Specialite</h5>
                    </Container>
                    
                </Col>
                <Col className='thread-comment-content' sm="9">
                
                <p>
                    {item.body}
                </p>

                    <div className='thread-comment-control'>
                        <i>added on : {item.dateCreated}</i>
                        <IconButton  onClick={() => {OnDeleteComment(item._id)} }><DeleteIcon /></IconButton>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}  sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} checked={item.likes != null && item.likes.length > 0} onChange={ (event) =>{ OnCommentLike(event,1,item._id) }} />
                    </div>
                </Col>
                
            </Row>
            
            ) })}
            
        </Container>
        </>
    );
};
 
export default ThreadContentCard;