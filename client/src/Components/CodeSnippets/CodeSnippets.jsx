import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import Auth0Snippet from "./Auth0Snippet";
import ReactSnippet from "./ReactSnippet";
import BootstrapSnippet from "./BootstrapSnippet";
import "../../assets/styles/CodeSnippets.scss";

const CodeSnippets = () => {
  return (
    <>
      <Row className="mb-4">
        <Col md={3}>
          <h5 className="d-inline">Let's</h5>
          <h2 className="d-inline">
            <sub>Look</sub>
          </h2>
          <h4 className="d-inline" style={{ color: "teal" }}>
            @
          </h4>
          <br />
          <h3 className="d-inline">
            <sup>Some</sup>
          </h3>
          <h6 className="d-inline">
            <code style={{ color: "teal" }}>Code</code>
          </h6>
          <h4 className="d-inline">Snippets</h4>
        </Col>
        <Col md={9} className="text-left">
          As a company you want to enable your developers to use open source
          software, and as a developer you want the flexibility of using both
          whole components and re-using files or partial code snippets
          originating from open source projects. Below I'm going to go over a
          few snippets of code showing the work behind the curtain.
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h4>
              <b>Auth0:</b> Authentication & Authorization
            </h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Auth0Snippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h4>
              <b>Bootstrap:</b> Responsive & Mobile-First Web Development
            </h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <BootstrapSnippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h4>
              <b>React:</b> The UI Experience
            </h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ReactSnippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default CodeSnippets;
