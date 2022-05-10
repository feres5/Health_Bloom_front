import {React,useState,useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
//import { Button } from 'antd';
import { Checkbox, Button, IconButton} from '@mui/material';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ThreadContentCard = (props) => 
{
    //const [comments,setComments] = useState([])
    const {id}= useParams()
    const history = useNavigate()
    const [userData, setUserData] = useState(null)
    //alert(JSON.stringify(props.thread.user))

    useEffect(() => {
        setUserData(props.userData)
        //alert(JSON.stringify(userData))
    },[props.userData, userData])

    //alert(JSON.stringify(props.userData))

    
    useEffect(() => {
        //setComments(props.comments)
    }, [props.comments]);


    const OnDeleteThread = (id) => 
    {
        const url = process.env.REACT_APP_BackEnd_url + '/forum/delete-thread/'
        const urlId = url + id;
        axios.delete(urlId).then(() => {
            history("/dashboard/forum/section/" + props.thread.section);
            
        })
    }

    const OnDeleteComment = (commentId) => {

        const url = process.env.REACT_APP_BackEnd_url +  '/forum/delete-comment-from-thread/'
        const urlId = url + commentId;
        axios.delete(urlId).then(() => {
                    props.onCommentDelete(commentId)
        })
    }

    const OnCommentLike = (event,userId, commentId) => {
        if(event.target.checked)
        {
            const url = process.env.REACT_APP_BackEnd_url +  '/forum/add-like-to-comment'
            
                axios.post(url,{commentId:commentId, userId:userId }).then(() => {
                    
                    props.onCommentLike()
            }).catch((err) => {

            })
        }
        else
        {
            const url =  process.env.REACT_APP_BackEnd_url +  '/forum/delete-like-from-comment/'
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
                        <a href="#"> {props.thread.user ? props.thread.user.FirstName + " " + props.thread.user.LastName : ""} </a>
                        <h5>{props.thread.user ? props.thread.user._doctor.Speciality : ""}</h5>
                    </Container>   
                </Col>
                <Col className='thread-comment-content thread-main-content' sm="9">
                    
                <h3>{props.thread.title}</h3>
                <p>
                    {props.initContent.body}
                </p>
                <div className='thread-comment-control'>
                <i>created on : {props.initContent.dateCreated}</i>

                    { props.thread.user && userData && userData.user._id === props.thread.user._id && 
                        <IconButton onClick={() => {OnDeleteThread(id)} }><DeleteIcon /></IconButton>
                    }
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}  sx={{
            color: pink[800],
            '&.Mui-checked': {
            color: pink[600],
            },
            }} checked={props.initContent.likes != null && userData && props.initContent.likes.map((item) => {return item.user}).includes(userData.user._id)} onChange={ (event) =>{ if(userData) OnCommentLike(event,userData.user._id,props.initContent._id) }} />
                <p className='comment-like-count'>{props.initContent.likes != null ? JSON.stringify(props.initContent.likes.length) :  "0"}</p>
                </div>
                </Col>
            </Row> 
            {props.comments.map((item) => { return(
            <Row key={item._id}>
                <Col className='thread-profile-info' sm="3">
                    <Container>
                        <img src= {require("assets/img/eva.jpg").default}  alt="" />
                        <a href="#">{item.user ? item.user.FirstName + " " + item.user.LastName : ""} </a>
                        <h5>{props.thread.user ? props.thread.user._doctor.Speciality : ""}</h5>
                    </Container>
                    
                </Col>
                <Col className='thread-comment-content' sm="9">
                
                <p>
                    {item.body}
                </p>

                    <div className='thread-comment-control'>
                        <i>added on : {item.dateCreated}</i>
                        { item.user && userData && userData.user._id === item.user._id && 
                        <IconButton  onClick={() => {OnDeleteComment(item._id)} }><DeleteIcon /></IconButton> }
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}  sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} checked={item.likes != null && userData && item.likes.map((item) => {return item.user}).includes(userData.user._id)} onChange={ (event) =>{ if(userData) OnCommentLike(event,userData.user._id,item._id) }} />
                    <p className='comment-like-count'>{item.likes != null ? JSON.stringify(item.likes.length) :  "0"}</p>
                    </div>
                </Col>
                
            </Row>
            
            ) })}
            
        </Container>
        </>
    );
};
 
export default ThreadContentCard;