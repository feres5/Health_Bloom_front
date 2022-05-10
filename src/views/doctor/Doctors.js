import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// reactstrap components
import "../../assets/scss/magazine.scss";
import "./styles.css";
import { useNavigate } from "react-router-dom";

//import map
import DoctorsMap from "../map/DoctorsMap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import DoctorsHeader from "./DoctorsHeader";
import { FormGroup, Input, Col } from "reactstrap";
import profilavatar from "../../Dashboard/assets/images/face-1.jpg";
import {
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";
function Doctors() {
  const navigate = useNavigate();

  const [rightFocus, setRightFocus] = React.useState(false);
  const [doctors, setDoctors] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const doctorsPerPage = 4;
  useEffect(() => {
    axios
      .get(`http://localhost:3002/doctor/getAll`)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDoctors / doctorsPerPage); i++) {
    pageNumbers.push(i);
  }

  const doctorsData = useMemo(() => {
    let computedDoctors = doctors;

    if (searchTerm) {
      computedDoctors = computedDoctors.filter((doc) =>
        doc.Email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCompleted === "true") {
      computedDoctors = computedDoctors.filter(
        (doc) => filterCompleted === "true"
      );
    }

    if (filterCompleted === "false") {
      computedDoctors = computedDoctors.filter(
        (doc) => filterCompleted === "false"
      );
    }

    setTotalDoctors(computedDoctors.length);

    //Current Page slice
    return computedDoctors.slice(
      (currentPage - 1) * doctorsPerPage,
      (currentPage - 1) * doctorsPerPage + doctorsPerPage
    );
  }, [doctors, currentPage, searchTerm, filterCompleted]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const resetFilter = () => {
    setSearchTerm("");
    setFilterCompleted("");
    setCurrentPage(1);
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <DoctorsHeader />
        <br />
        <br />
        {/* ---------------------Search ------------------------ */}
        <div className="section section-basic">
          <Container>
            <form>
              <Row>
                <FormGroup>
                  <InputGroup className={rightFocus ? "input-group-focus" : ""}>
                    <Input
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      id="search"
                      placeholder="Search for Doctor..."
                      type="text"
                    ></Input>
                    <InputGroupAddon addonType={"prepend"}>
                      <InputGroupText>
                        <i
                          className="now-ui-icons ui-1_zoom-bold"
                          aria-hidden="true"
                        ></i>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                <br />
                <br />
              </Row>
            </form>
          </Container>
        </div>
        {/* ---------------------end Search ------------------------ */}

        <div className="wrapperArticles">
          {doctorsData.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card__body">
                  <img src={profilavatar} className="card__image" />
                  <h4 className="card__title">
                    {item.FirstName} {item.LastName}{" "}
                  </h4>
                  <h6 className="card__description">
                    {item._doctor && item._doctor.Speciality}
                  </h6>
                  <p className="card__description">
                    {item._doctor &&
                      item._doctor.Description &&
                      item._doctor.Description.slice(0, 130)}
                    {item._doctor &&
                      item._doctor.Description &&
                      item._doctor.Description.length > 130 && <>...</>}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/doctor-profile-front/${item._id}`)}
                  className="card__btn"
                >
                  View Profile
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div></div>
        <nav className="pagination pagination-info">
          <ul className="pagination-info pagination">
            {pageNumbers.map((number) => {
              {
                return currentPage === number ? (
                  <li key={number} className="active page-item">
                    <button
                      onClick={() => paginate(number)}
                      className="page-link"
                    >
                      {number}
                    </button>
                  </li>
                ) : (
                  <li key={number} className=" page-item">
                    <button
                      onClick={() => paginate(number)}
                      className="page-link"
                    >
                      {number}
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        {/*--------------Map--------------------------------------------- */}
        <h3 className="title">Map</h3>
        <div>
          <DoctorsMap />
        </div>

        {/*--------------end Map-------------------------------------- */}
      </div>
      <br />
      <br />

      <DarkFooter />
    </>
  );
}

export default Doctors;
