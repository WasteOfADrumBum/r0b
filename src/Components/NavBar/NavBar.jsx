import React from "react";
import { Nav, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiArrowToTop } from "react-icons/bi";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav className="justify-content-center text-uppercase" activeKey="/home">
        <Nav.Item>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Dependencies
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Snippets
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Creator
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            License
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
    </>
  );
};

export default NavBar;
