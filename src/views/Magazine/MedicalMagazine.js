import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import "../../assets/scss/magazine.scss";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import MagazineHeader from "components/Headers/MagazineHeader";
import {
  FormGroup,
  Input,
  Col,
  NavbarText,
} from "reactstrap";
import jwt_decode from "jwt-decode";
import { Button } from "react-bootstrap";



function MedicalMagazine() {

  const [articles, setarticles] = useState([])
  const [searchTerm, setsearchTerm] = useState("")
  console.log(searchTerm)
  const fetcharticles = async () => {
    const url = process.env.REACT_APP_BackEnd_url+'/articles'
    const reponse = await fetch(url)
    const newarticles = await reponse.json()
    setarticles(newarticles)
    console.log(newarticles)
  }
  useEffect(() => {
    fetcharticles()
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
    <>
      <IndexNavbar />
      <div className="wrapper">

        <MagazineHeader />
        <br/>
        <br/>
     
              <Col lg="12" >
              <div>    
              </div>
                <FormGroup>
                <Button  value="Dermatology" className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Dermatology
               </Button>
               <Button  onClick={() => {}} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Allergy and immunology
               </Button>
               <Button  onClick={() => {}} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Cardiology
               </Button>
               <Button  onClick={() => {}} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Obstetrics and gynecology
               </Button>
               <Button  onClick={() => {}} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Ophthalmology
               </Button>
               <Button  onClick={() => {}} className="btn-round" color="info" size="lg">
                <i class="now-ui-icons ui-2_favourite-28"></i>
                Emergency medicine
               </Button>   
                </FormGroup>
              </Col>
        <div className="wrapperArticles">
              
        {articles.map((item) => {
                     
          return(
            <div className="card">
            <div className="card__body">
              <img src={process.env.PUBLIC_URL+ item.image}  class="card__image" />
              <h4 className="card__title">{item.title}</h4>
              {/* <p className="card__description">{item.author}</p> */}
            </div>
            <Link
                to={{pathname: "/article"}}
                state={{idArticle: item._id}}
            >
            <button className="card__btn">Read Article</button>
            </Link>
          </div>
          )
          })
          } 

        </div>

      </div>
      <DarkFooter />
    </>
  );
}

export default MedicalMagazine;
