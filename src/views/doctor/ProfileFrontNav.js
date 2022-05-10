import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {});
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
          <h3 className="title">
            {props.info && props.info.user && props.info.user.FirstName}{" "}
            {props.info && props.info.user && props.info.user.LastName}
          </h3>
          <p className="category">
            {props.info && props.info.doctor && props.info.doctor.Speciality}
          </p>
          <div className="content">
            <div className="social-description">
              <h2>
                {props.info &&
                  props.info.doctor &&
                  props.info.doctor &&
                  props.info.doctor.Patients &&
                  props.info.doctor.Patients.length}
              </h2>
              <p>Patients</p>
            </div>
            <div className="social-description">
              <h2>
                {props.info &&
                  props.info.doctor &&
                  props.info.doctor &&
                  props.info.doctor.Appointments &&
                  props.info.doctor.Appointments.length}
              </h2>
              <p>Appointments</p>
            </div>
            <div className="social-description">
              <h2>
                {props.info &&
                  props.info.doctor &&
                  props.info.doctor &&
                  props.info.doctor.LaborTime}
              </h2>
              <p>Labor Time</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
