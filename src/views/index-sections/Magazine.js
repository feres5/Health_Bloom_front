import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
function Magazine() {

  const [articles, setarticles] = useState([])
  const fetcharticles = async () => {
    const url = 'http://localhost:3002/articles/bestArticles'
    const reponse = await fetch(url)
    const newarticles = await reponse.json()
    setarticles(newarticles)
    console.log(newarticles)
  }
  useEffect(() => {
    fetcharticles()
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
    const nextIndex = activeIndex === articles.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? articles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="Magazine">
        <Container>
          <div className="title">
          <h3 className="title"><i className="now-ui-icons sport_trophy"></i> Our best articles</h3>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={articles}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {articles.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}

                      key={require("assets/img/bg1.jpg").default}
                    >
                      <img src={process.env.PUBLIC_URL+ item.image} alt={item.title} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.title}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
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
                  href="#pablo"
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
    </>
  );
}

export default Magazine;
