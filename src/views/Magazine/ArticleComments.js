import React, { useState, useEffect } from "react";
// reactstrap components
import "../../assets/scss/magazine.scss";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardSubTitle } from 'mdb-react-ui-kit';


function ArticleComments(props) {
 const idArticle= props.id;
 const [searchTerm, setsearchTerm] = useState([])
  const [comments, setcomments] = useState([])
  const fetchcomments = async () => {
    const url = "http://localhost:3002/articles/comments/"
    const urlId= url+idArticle
    const reponse = await fetch(urlId)
    const newcomments = await reponse.json()
    setcomments(newcomments)
    console.log(newcomments)
  }
  useEffect(() => {
    fetchcomments()
  }, [])
  
  const handleSearchTerm = async (e) => {
    let value = e.target.value;
    setsearchTerm(value);
    console.log(value)
  }  

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
      <div >
    <MDBCard background='primary' className='text-white mb-3' style={{ minWidth: '100rem' }}>
    <MDBCardHeader>Header</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Primary card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </div>
  );
}

export default ArticleComments;

