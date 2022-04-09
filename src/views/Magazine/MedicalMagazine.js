import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import "../../assets/scss/magazine.scss";

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

function MedicalMagazine() {
 const [searchTerm, setsearchTerm] = useState([])
  const [articles, setarticles] = useState([])
  const fetcharticles = async () => {
    const url = 'http://localhost:3002/articles'
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
       
              <Col md="6" sm="6">
                <FormGroup>
                  <Input
                    onChange={handleSearchTerm}
                    defaultValue=""
                    placeholder="Search articles"
                    type="text"
                    
                  ></Input>
                </FormGroup>
              </Col>
        <div className="wrapperArticles">
              
        {articles.filter((val) => {
                    return val.title
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase())
                  })
        .map((item) => {
          return(
            <div className="card">
            <div className="card__body">
              <img src={process.env.PUBLIC_URL+ item.image}  class="card__image" />
              <h4 className="card__title">{item.title}</h4>
              <p className="card__description">{item.author}</p>
            </div>
            <Link to={{
                            pathname: "/article",
                            state: {
                              idArticle: item._id
                            }
                          }} >
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

