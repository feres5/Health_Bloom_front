import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import "../../assets/scss/magazine.scss";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardSubTitle, MDBCardFooter } from 'mdb-react-ui-kit';
import jwt_decode from "jwt-decode";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import MagazineHeader from "components/Headers/MagazineHeader";
import {
  Button,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";


function ArticleComments(props) {
  const idArticle = props.id;
  console.log(idArticle)
  
  const refreshPage = () => {
    window.location.reload();
  }
 
  const [comments, setcomments] = useState([])
  const fetchcomments = async () => {
    const url = "http://localhost:3002/articles/comments/"
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

    fetch(`http://localhost:3002/articles/deleteComment/${id}`, {
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
    <div>
      { comments.map((item)=>{
        var current= item.dateTime

        return(
          <MDBCard background='info' className='text-white mb-3' style={{ maxWidth: '60rem' }}>
          <MDBCardHeader padding={200} > Written by  {item.emailUser}</MDBCardHeader>
          <MDBCardText>
             {current}
            </MDBCardText>
          <MDBCardBody  frameBorder={10}>
            
            <MDBCardTitle ><h5>{item.content}</h5></MDBCardTitle>
            
            <Button disabled={item.idUser!=decodedTOKEN.user_id} onClick={() => {deleteComment(item._id)} } class="btn-round btn btn-danger">Delete</Button>
          </MDBCardBody>
        </MDBCard>        )

      })}


     {/*    */}
    </div>
  );
}

export default ArticleComments;

