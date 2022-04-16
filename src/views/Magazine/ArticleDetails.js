import DefaultFooter from "components/Footers/DefaultFooter";
import ArticleHeader from "components/Headers/ArticleHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  Button,
  Container
} from "reactstrap";
import ArticleComments from "./ArticleComments";
import CommentBox from "./CommentBox";



function ArticleDetails(props) {

  const location = useLocation();
  const idArticle = location.state.idArticle
  
  const [ArticleDetails, setArticleDetails] = useState([])
  const url = "http://localhost:3002/articles/"

  const fetchArticleDetails = async () => {
    const urlId = url + idArticle;

    const reponse = await fetch(urlId)
    const newArticleDetails = await reponse.json()
    setArticleDetails(newArticleDetails)
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
 
  const [Author, setAuthor] = useState([])

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


  const refreshPage = () => {
    window.location.reload();
  }

  const like = async (id) => {

    fetch(`http://localhost:3002/articles/likeArticle/${id}`, {
      method: 'PUT'
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

  const unlike = async (id) => {

    fetch(`http://localhost:3002/articles/unlikeArticle/${id}`, {
      method: 'PUT'
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

  return (

    <>
      <IndexNavbar />
      <div className="wrapper">
        <ArticleHeader
          title={ArticleDetails.title}
          author={"Dr."+Author.FirstName+ " "+Author.LastName}
          image={ArticleDetails.image}
          nbComments={ArticleDetails.nbComments}
          nbLikes={ArticleDetails.nbLikes} />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button onClick={() => { like(ArticleDetails._id) }} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Like
              </Button>
              <Button onClick={() => { unlike(ArticleDetails._id) }} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Dislike
              </Button>

            </div>
            <h4 className="title">{ArticleDetails.description}</h4>
         
          <div align="right">
            <CommentBox idArticle={idArticle} />
            </div>  
         
            <div align="left">
        
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
