import React, { useState, useEffect } from "react";
// reactstrap components
import "../../assets/scss/magazine.scss";
import jwt_decode from "jwt-decode";
import Filter from 'bad-words';

// core components

import { Comment, Form, Header } from 'semantic-ui-react'
import {
  Button,
  Container
} from "reactstrap";

function ArticleComments(props) {
  const idArticle = props.id;
  console.log(idArticle)
  
  const refreshPage = () => {
    window.location.reload();
  }
  const filter = new Filter();
  console.log(filter.clean("Don't be an ash0le")); //Don't be an ******

  const [comments, setcomments] = useState([])
  const fetchcomments = async () => {
    const url = process.env.REACT_APP_BackEnd_url+"/articles/comments/"
    const urlId = url + idArticle
    const reponse = await fetch(urlId)
    const newcomments = await reponse.json()
    setcomments(newcomments)
  }
  useEffect(() => {
    fetchcomments()
    console.log(comments)

  }, [])


  const deleteComment = async (id) => {

    fetch(process.env.REACT_APP_BackEnd_url+`/articles/deleteComment/${id}`, {
      method: 'GET'
    })
      .then(async response => {

        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

      })
      .catch(error => {
        console.error('There was an error!', error);
      });
       refreshPage()

  }


  var user = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(user,{payload : true});

     


  return (
    <div align="left" border="2px">
        { comments.map((item)=>{
        var current= item.dateTime
        return(
     <Comment.Group>
       <div style={
      {
       width: '800px',
      }
    } align="left" >
        <Comment>
        
        <Comment.Content>
        <div style={
      {
        height:"20px",
       marginInlineStart:'200px',
      }
    }>


      <Button disabled={item.idUser!=decodedTOKEN.user_id} onClick={() => {deleteComment(item._id)} } ><i class="now-ui-icons ui-1_simple-remove"></i></Button>
    </div>
        <Comment.Avatar as='a' height={50} src='https://marketplace-cdn.atlassian.com/files/0a5f21f1-69fd-4ca9-b2f1-e7e3d19f3d81?fileType=image&mode=full-fit' />
          <Comment.Author as='b'>  {item.emailUser}</Comment.Author>         
         

          <Comment.Metadata>
            <span class="mr-1 badge badge-success">{current}</span>
          </Comment.Metadata>
          <Comment.Text>{filter.clean(item.content)}</Comment.Text>

        </Comment.Content>
     

         </Comment>
      </div>

      <br/>
    </Comment.Group>
        )
 })}

    </div>
  );
}

export default ArticleComments;

