import React,{ useEffect, useState } from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import jwt_decode from "jwt-decode";
// core components

function MagazineHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  var user = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(user,{payload : true});
  
  const refreshPage = () => {
    window.location.reload();
  }
  const [Author, setAuthor] = useState([])

  const url = process.env.PUBLIC_URL+"/articles/Author/"

  const fetchAuthor = async () => {
      const urlId = url + decodedTOKEN.user_id;

      const reponse = await fetch(urlId)
      const newAuthor = await reponse.json()
      setAuthor(newAuthor)
      console.log(newAuthor)
  }
  useEffect(() => {
      fetchAuthor()
  }, [])

  const unsubscribe = async (id) => {

    fetch(process.env.PUBLIC_URL+`/articles/unsubscribe/${id}`, {
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

  const subscribe = async (id) => {

    fetch(process.env.PUBLIC_URL+`/articles/subscribe/${id}`, {
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
      <div className="page-header clear-filter page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header2.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
           <Container>
            <h1 className="title"> Contact Us</h1>
            <div className="text-center">

            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MagazineHeader;
