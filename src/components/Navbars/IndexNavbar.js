import React, {useEffect, useState} from "react";
import {useNavigate } from "react-router-dom";

// reactstrap components
import {
  Collapse, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarBrand,
  Navbar, NavItem, NavLink,Input, Nav, Container, UncontrolledTooltip, Button, InputGroupAddon, InputGroupText
} from "reactstrap";

//imports for popUp
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import jwt_decode from "jwt-decode";
import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Alert} from "@mui/material";
import {InputGroup} from "react-bootstrap";

function IndexNavbar() {
  const navigate = useNavigate()
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const url = "http://localhost:3002/users/";
  //console.log(localStorage.getItem("user_info"))
  var token = localStorage.getItem("user_info");
  var decodedTOKEN = null;

  useEffect(()=>{
    if(token){
      decodedTOKEN = jwt_decode(token,{payload : true});
      //console.log(decodedTOKEN);
    }
  },[])

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
          document.documentElement.scrollTop > 399 ||
          document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
          document.documentElement.scrollTop < 400 ||
          document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  async function LogOut(){
    console.log("logging out");
    localStorage.removeItem("user_info");
    navigate("/index");
  }

  //change password functions
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [newPasswordForm,SetNewPasswordForm] = useState({
    newPassword : "",
    confirmNewPassword :""
  })
  const {newPassword,confirmNewPassword}= newPasswordForm;
  const onChangePassword = (e) =>
      SetNewPasswordForm({...newPasswordForm , [e.target.name]: e.target.value});
  async function changePassword(){
    console.log(newPasswordForm);
    if (newPassword===confirmNewPassword){
      let result = await fetch(
          url+"changePassword/"+decodedTOKEN.user_id,
          {
            method:'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept":'application/json'
            },
            body: JSON.stringify(newPasswordForm)
          }
      )
      handleClose();
      navigate("/PatientProfile");
    }
    else
      alert("password and confirm password needs to be the exact same");

  }
  return (
      token ?(
          <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="/index" id="navbar-brand">
                    <img src={require("assets/img/logoNav1.png").default}
                         width="70"
                         className="d-inline-block align-top"
                    />
                  </NavbarBrand>
                  <UncontrolledTooltip target="#navbar-brand">
                    Head To Home Page
                  </UncontrolledTooltip>
                  <button
                      className="navbar-toggler navbar-toggler"
                      onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(!collapseOpen);
                      }}
                      aria-expanded={collapseOpen}
                      type="button"
                  >
                    <span className="navbar-toggler-bar top-bar"></span>
                    <span className="navbar-toggler-bar middle-bar"></span>
                    <span className="navbar-toggler-bar bottom-bar"></span>
                  </button>
                </div>


                <Collapse
                    className="justify-content-end"
                    isOpen={collapseOpen}
                    navbar
                >
                  <Nav navbar>

                    <NavItem>
                      <NavLink
                          href="/medical-magazine"
                      >
                        <i className="now-ui-icons business_bulb-63 mr-1"></i>
                        <p>Medical Magazine</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <i className="now-ui-icons files_paper mr-1"></i>
                        <p>Forum</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <i className="now-ui-icons shopping_basket mr-1"></i>
                        <p>Shop</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <i className="now-ui-icons shopping_cart-simple mr-1"></i>
                        <p>Cart</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <p>About Us?</p>
                      </NavLink>
                    </NavItem>
                    {/*for inbox messages*/}
                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                      >
                        <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_send"
                        ></i>
                      </NavLink>
                    </NavItem>
                    {/*for profile */}
                    <NavItem>
                      <NavLink
                          href="/profile-page"
                      >
                        <i
                            aria-hidden={true}
                            className="now-ui-icons users_single-02"
                        ></i>
                      </NavLink>
                    </NavItem>
                    {/*  for parameters*/}

                    <UncontrolledDropdown nav>
                      <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={(e) => e.preventDefault()}
                      >
                        <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                        ></i>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem header tag="a">
                          Dropdown header
                        </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <div className="divider"></div>
                        <DropdownItem
                            href="#pablo"
                            onClick={handleClickOpen}
                        >
                          change password
                        </DropdownItem>
                        <div className="divider"></div>
                        <DropdownItem
                            href="#pablo"
                            onClick={LogOut}
                        >
                          Log out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
            <Dialog open={open} onClose={()=>handleClose()} >
              <DialogTitle>change your password</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  please fill the fields under in order to change your password
                </DialogContentText>
                <form action="" className="form" method="">
                  <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_key-25"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        defaultValue={newPassword}
                        placeholder="New Password"
                        type="password"
                        name="newPassword"
                        onChange={(e)=>onChangePassword(e)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_key-25"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        defaultValue={confirmNewPassword}
                        placeholder="confirm Password"
                        type="password"
                        name="confirmNewPassword"
                        onChange={(e)=>onChangePassword(e)}
                    ></Input>
                  </InputGroup>
                </form>
                <DialogActions>
                  <Button onClick={()=>handleClose}>Cancel</Button>
                  <Button onClick={()=>changePassword()}>Change</Button>
                </DialogActions>
              </DialogContent>
            </Dialog>
          </>
      ):(
          <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="/index" id="navbar-brand">
                    <img src={require("assets/img/logoNav1.png").default}
                         width="70"
                         className="d-inline-block align-top"
                    />
                  </NavbarBrand>
                  <UncontrolledTooltip target="#navbar-brand">
                    Head To Home Page
                  </UncontrolledTooltip>
                  <button
                      className="navbar-toggler navbar-toggler"
                      onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(!collapseOpen);
                      }}
                      aria-expanded={collapseOpen}
                      type="button"
                  >
                    <span className="navbar-toggler-bar top-bar"></span>
                    <span className="navbar-toggler-bar middle-bar"></span>
                    <span className="navbar-toggler-bar bottom-bar"></span>
                  </button>
                </div>


                <Collapse
                    className="justify-content-end"
                    isOpen={collapseOpen}
                    navbar
                >
                  <Nav navbar>

                    <NavItem>
                      <NavLink
                          href="/medical-magazine"
                      >
                        <i className="now-ui-icons business_bulb-63 mr-1"></i>
                        <p>Medical Magazine</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <i className="now-ui-icons files_paper mr-1"></i>
                        <p>Forum</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <i className="now-ui-icons shopping_basket mr-1"></i>
                        <p>Shop</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <i className="now-ui-icons shopping_cart-simple mr-1"></i>
                        <p>Cart</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("download-section")
                                .scrollIntoView();
                          }}
                      >
                        <p>About Us?</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="/login-page"
                      >
                        <p>Login</p>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                          href="/signUp"
                      >
                        <p>Register</p>
                      </NavLink>
                    </NavItem>

                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </>
      )
  );
}

export default IndexNavbar;
