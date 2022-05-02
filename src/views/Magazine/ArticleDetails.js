import DefaultFooter from "components/Footers/DefaultFooter";
import ArticleHeader from "components/Headers/ArticleHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardSubTitle, MDBCardFooter } from 'mdb-react-ui-kit';

import {
  Button,
  Container
} from "reactstrap";
import ArticleComments from "./ArticleComments";
import CommentBox from "./CommentBox";
import { red } from "@mui/material/colors";



function ArticleDetails(props) {
  const [Author, setAuthor] = useState([])
  const [Like, setLike] = useState()
  const[nbLikes,setNblikes] =useState()
  const[nbComments,setnbComments] =useState()

  const location = useLocation();
  const idArticle = location.state.idArticle
  
  const [ArticleDetails, setArticleDetails] = useState([])
  const url = "http://localhost:3002/articles/"

  const fetchArticleDetails = async () => {
    const urlId = url + idArticle;

    const reponse = await fetch(urlId)
    const newArticleDetails = await reponse.json()
    setArticleDetails(newArticleDetails)
    setNblikes(newArticleDetails.nbLikes)
    setnbComments(newArticleDetails.nbComments)
  }
  useEffect(() => {
    fetchArticleDetails()
  }, [])
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
 


  var user = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(user,{payload : true});

  const urlAuthor = "http://localhost:3002/articles/Author/"
  const fetchAuthor = async () => {
      const urlId = urlAuthor + decodedTOKEN.user_id

      const reponse = await fetch(urlId)
      const newAuthor = await reponse.json()
      setAuthor(newAuthor)
      console.log(newAuthor)
      return newAuthor;
  }
  useEffect(() => {
      fetchAuthor()
  }, [])




  const urlLike = "http://localhost:3002/articles/getLike/"

  const fetchLike = async () => {
      const urlId = urlLike + idArticle+"/"+ decodedTOKEN.user_id
      const reponse = await fetch(urlId)
      const newLike = await reponse.json()
      setLike(newLike)
      console.log(" does the like exist.? "+newLike)
      return newLike;
  }
  useEffect(() => {
      fetchLike()
  }, [])

 

  const like = async (article,user) => {

    fetch(`http://localhost:3002/articles/likeArticle/${article}/${user}`, {
      method: 'POST'
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
      setNblikes(nbLikes+1)
      setLike(true)

  }

  const unlike = async (article,user) => {

    fetch(`http://localhost:3002/articles/unlikeArticle/${article}/${user}`, {
      method: 'DELETE'
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
      setNblikes(nbLikes-1)
      setLike(false)

  }

  

  return (

    <>
      <IndexNavbar />
      <div className="wrapper">
        <ArticleHeader
          title={ArticleDetails.title}
          author={"Dr."+Author.FirstName+ " "+Author.LastName}
          image={ArticleDetails.image}
          nbComments={nbComments}
          nbLikes={nbLikes} />
        <div className="section">
          <Container>
            
            <div className="button-container">
              <Button hidden={Like}  onClick={() => { like(ArticleDetails._id,decodedTOKEN.user_id) }} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Like
              </Button>
              <Button hidden={!Like} onClick={() => { unlike(ArticleDetails._id,decodedTOKEN.user_id) }} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Unlike
              </Button>
            </div>
            <h4 className="title">{ArticleDetails.description}</h4>
         
          <div align="right">
            <CommentBox idArticle={idArticle} />
            </div>  
         
            <div   align="center">
              <ArticleComments id={idArticle}/>
            </div>
            </Container>
          </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default ArticleDetails;
