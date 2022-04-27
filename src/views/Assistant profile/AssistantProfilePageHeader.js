import React, {useEffect, useState} from "react";

// reactstrap components
import { Container } from "reactstrap";
import jwt_decode from "jwt-decode";

// core components

function ProfilePageHeader() {
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

  const [user, setuser] = useState([])
  const url = "http://127.0.0.1:3002/articles/Author/"

  var usertoken = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(usertoken,{payload : true});



  const fetchuser = async () => {
    const urluser = url + decodedTOKEN.user_id

    const reponse = await fetch(urluser)
    const newuser = await reponse.json()
    setuser(newuser)
    console.log("==========>"+newuser._assistant)
    localStorage.setItem('idAssistant', newuser._assistant);


    return newuser;
  }
  useEffect(() => {
    fetchuser();
    fetchAssistant();
  }, [])


  const[Assistant,setAssistant]= useState([])

  const fetchAssistant = async () => {
    const urlA = "http://127.0.0.1:3002/users/getassistants/"
    const idA= localStorage.getItem("idAssistant")

    const urlAssistant = urlA +idA
    console.log("=======>"+urlAssistant)
    const reponse = await fetch(urlAssistant)
    const newAssistant = await reponse.json();
    console.log(newAssistant)
    setAssistant(newAssistant)


    return newAssistant;
  }

  console.log("hello assistant"+Assistant.Speciality);


  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg5.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
          </div>
          <h3 className="title">{user.FirstName}</h3>
          <p className="category">{Assistant.Speciality}</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
