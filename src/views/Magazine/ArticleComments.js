import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import "../../assets/scss/magazine.scss";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardSubTitle } from 'mdb-react-ui-kit';

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
import ArticleDetails from "./ArticleDetails";

function ArticleComments(props) {
  const idArticle = props.id;
  console.log(idArticle)

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


 
  return (
    <div>
      { comments.map((item)=>{
        
        return(
          <MDBCard background='info' className='text-white mb-3' style={{ minWidth: '50rem' }}>
          <MDBCardHeader> At: {item.dateTime}</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{item.content}</MDBCardTitle>
            <MDBCardText>
              User
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>        )

      })}


     {/*    */}
    </div>
  );
}

export default ArticleComments;

