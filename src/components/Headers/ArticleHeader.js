import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ArticleHeader(props) {
  let pageHeader = React.createRef();
  const str= 
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
              "url(" +process.env.PUBLIC_URL+ props.image+ ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
         
          <h3 className="title">{props.title}</h3>
          <br/>
          <p className="category">By {props.author}</p>
          <div className="content">
            <div className="social-description">
              <h2>{props.nbComments}</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>{props.nbLikes}</h2>
              <p>Likes</p>
            </div>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default ArticleHeader;
