import React from "react";

import { useState } from "react";
import { Modal } from "react-bootstrap";
// core components
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ProfileFrontNav from "./ProfileFrontNav";
import { useParams } from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import FrontCalandar from "../schedule/FrontCalandar";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import MapFront from "views/map/MapFront";

function ProfilePage() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [docId, setDocId] = useState(null);
  const getInfo = async () => {
    const reponse = await fetch(process.env.REACT_APP_BackEnd_url+`/users/getById/${id}`);
    const infoRes = await reponse.json();
    setData(infoRes);

    setDocId(infoRes.doctor._id);
  };

  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    getInfo();

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
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfileFrontNav info={data} />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-google"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                {data && data.user && data.user.Email}
              </UncontrolledTooltip>
            </div>
            <h3 className="title">Description</h3>
            <h5 className="description">
              {data && data.doctor && data.doctor.Description}
            </h5>

            <h3 className="title">Doctor Schedule</h3>
            {/* -------------calandar ---------------------------------- */}
            {docId ? (
              <div>
                <FrontCalandar info={docId} />
              </div>
            ) : (
              <h6>loading agenda ...</h6>
            )}
            {/* ------------- end calandar ---------------------------------- */}
            {/*--------------Map--------------------------------------------- */}
            <h3 className="title">Doctor Location</h3>
            {docId ? (
              <div>
                <MapFront info={docId} />
              </div>
            ) : (
              <h6>loading map ...</h6>
            )}
            {/*--------------end Map-------------------------------------- */}
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
