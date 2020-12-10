import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiArrowToTop, BiMenu } from "react-icons/bi";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          margin: "auto",
          width: "50%",
          borderTop: ".1rem solid black",
          borderRadius: "5rem",
        }}
        className="mt-5"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ margin: "auto", width: "50%" }}
        >
          <BiMenu />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav activeKey="/home">
            <Nav.Item className="m-2">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  variant="outline-secondary"
                  className="text-capitalize "
                  style={{ border: "none" }}
                >
                  Dependencies
                </Button>
              </Link>
            </Nav.Item>
            <Nav.Item className="m-2">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  variant="outline-secondary"
                  className="text-capitalize "
                  style={{ border: "none" }}
                >
                  Snippets
                </Button>
              </Link>
            </Nav.Item>
            <Nav.Item className="m-2">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  variant="outline-secondary"
                  className="text-capitalize "
                  style={{ border: "none" }}
                >
                  Creator
                </Button>
              </Link>
            </Nav.Item>
            <Nav.Item className="m-2">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  variant="outline-secondary"
                  className="text-capitalize "
                  style={{ border: "none" }}
                >
                  License
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
          <Button
            style={{ position: "fixed", bottom: "-4px", right: "10px" }}
            variant="outline-secondary"
            onClick={scrollToTop}
          >
            <BiArrowToTop />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
