import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/styles/CodeSnippets.scss";
import CreateSnippet from "./CreateSnippet.jsx";
import ReadSnippet from "./ReadSnippet.jsx";
import UpdateSnippet from "./UpdateSnippet.jsx";
import DeleteSnippet from "./DeleteSnippet.jsx";

const CodeSnippets = () => {
  return (
    <>
      <Row className="mb-4 mt-5">
        <Col md={3}>
          <h5 className="d-inline">Let's</h5>
          <h2 className="d-inline">
            <sub>Look</sub>
          </h2>
          <h4 className="d-inline" style={{ color: "#70b5de" }}>
            @
          </h4>
          <br />
          <h3 className="d-inline">
            <sup>Some</sup>
          </h3>
          <h6 className="d-inline">
            <code style={{ color: "#70b5de" }}>CRUD</code>
          </h6>
          <h4 className="d-inline">Snippets</h4>
        </Col>
        <Col md={9} className="text-left">
          Now that you've had an oppourtunity to demo what a CRUD can do it's
          time to take a look at the code and break it down a bit into more
          snippets.
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h4>Create</h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CreateSnippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h4>Read</h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              <ReadSnippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h4>Update</h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {" "}
              <UpdateSnippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h4>Delete</h4>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {" "}
              <DeleteSnippet />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default CodeSnippets;
