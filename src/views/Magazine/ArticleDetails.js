import DefaultFooter from "components/Footers/DefaultFooter";
import ArticleHeader from "components/Headers/ArticleHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSpeechSynthesis } from "react-speech-kit";


import {
  Button,
  Carousel,
  Col,
  Container,
  CarouselItem,
  CarouselIndicators,
  Row
} from "reactstrap";
import ArticleComments from "./ArticleComments";
import CommentBox from "./CommentBox";


function ArticleDetails(props) {
  var synth = window.speechSynthesis;
  const [Author, setAuthor] = useState([])
  const [Articles, setArticles] = useState([])
  const [Like, setLike] = useState()
  const[nbLikes,setNblikes] =useState()
  const[nbComments,setnbComments] =useState()
  const location = useLocation();
  console.log(location);
  const idArticle = location.state.idArticle
  const { speak ,pause} = useSpeechSynthesis();
  const [ArticleDetails, setArticleDetails] = useState([])
  const url = process.env.REACT_APP_BackEnd_url+"/articles/"

  const fetchArticleDetails = async () => {
    const urlId = url + idArticle;

    const reponse = await fetch(urlId)
    const newArticleDetails = await reponse.json()
    setArticleDetails(newArticleDetails)
    setNblikes(newArticleDetails.nbLikes)
    setnbComments(newArticleDetails.nbComments)
    localStorage.setItem("category",newArticleDetails.category)

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

  const urlAuthor = process.env.REACT_APP_BackEnd_url+"/articles/Author/"
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

  const urlArticles = "http://localhost:3002/articles/getArticleByCategory/"
  const category= localStorage.getItem("category");
  console.log("category is ===>"+category)
  const fetchArticles = async () => {
      console.log("start")
      const url = urlArticles+category;
      const reponse = await fetch(url)
      const newArticles= await reponse.json()
      setArticles(newArticles)
      return newArticles;
  }
  useEffect(() => {
    fetchArticles()
  }, [])



  const urlLike = process.env.REACT_APP_BackEnd_url+"/articles/getLike/"

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

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === Articles.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? Articles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const like = async (article,user) => {

    fetch(process.env.REACT_APP_BackEnd_url+`/articles/likeArticle/${article}/${user}`, {
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

    fetch(process.env.REACT_APP_BackEnd_url+`/articles/unlikeArticle/${article}/${user}`, {
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
          nbLikes={nbLikes} category={ArticleDetails.category}/>
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
            <Button class='btn btn-primary btn-lg' className="btn-round" color="info" size="md"
       onClick={() =>synth.speak(new SpeechSynthesisUtterance(ArticleDetails.description))}>
                         <i class="now-ui-icons tech_headphones"></i>
            Read for me
             </Button>
             <Button class='btn btn-primary btn-lg' className="btn-round" color="warning" size="md"
       onClick={() => synth.pause()}>
                         <i class="now-ui-icons media-1_button-pause"></i>
           Pause
             </Button>
             <Button class='btn btn-primary btn-lg' className="btn-round" color="success" size="md"
       onClick={() => synth.resume()}>
                         <i class="now-ui-icons media-1_button-play"></i>
           Resume
             </Button>
             <Button class='btn btn-primary btn-lg' className="btn-round" color="danger" size="md"
       onClick={() => synth.cancel()}>
                         <i class="now-ui-icons media-1_button-power"></i>
           Stop
             </Button>
            <h4 className="title">{ArticleDetails.description}</h4>
         
          <br/>
          <br/>
       
            <div style={
      {
       border: '2px solid green'
      }
    } align="left">
      <br/>
                 <h4 align="center"> List of comments </h4>
            <br/>
            <CommentBox idArticle={idArticle} />
            <br/>
            <ArticleComments id={idArticle}/>
            <br/>
            </div>
            <br/>
            <br/>
            <h4 className="title"> Suggestions:  Read More on {ArticleDetails.category}   </h4>
            <Row  className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators 
                  items={Articles}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {Articles.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}

                      key={require("assets/img/bg1.jpg").default}
                    >
                      <img height={400} width={1000} src={process.env.PUBLIC_URL+ item.image} alt={item.title} />
                      <div className="carousel-caption d-none d-md-block">
                      <Link to={{
                            pathname: "/article",
                            state: {
                              idArticle: item._id
                            }
                          }} ><h5>{item.title}</h5></Link>   
                      </div>
                      
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>

            </Container>

          </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default ArticleDetails;
