import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
  <Nav className="justify-content-center text-uppercase" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#" disabled>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" disabled>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" disabled>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</>
  );
};

export default NavBar;
