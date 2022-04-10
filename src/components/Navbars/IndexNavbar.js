import React from "react";
import {useNavigate } from "react-router-dom";

// reactstrap components
import {
  Collapse, DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const history = useNavigate ()
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
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
  //console.log(localStorage.getItem("user_info"))
  const token = localStorage.getItem("user_info");

  async function LogOut(){
    console.log("logging out");
    localStorage.removeItem("user_info");
    history.push("/login-page");
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
                      onClick={(e) => e.preventDefault()}
                  >
                    Separated link
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
