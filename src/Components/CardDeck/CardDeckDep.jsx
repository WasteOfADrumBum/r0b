import React from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardDeck,
} from "react-bootstrap";

const CardDeckDep = () => {
  return (
    <>
      {/* Banner */}
      <Row className="justify-content-md-center">
        <Col className="m-auto pb-2" m="auto">
          <h2>This Applications Promenant Dependencies</h2>
        </Col>
      </Row>

      <CardDeck>
        {/* React */}
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/250" />
          <Card.Body>
            <Card.Title>
              <b style={{ color: "#61dafb" }}>React.js</b>
            </Card.Title>
            <Card.Text>
              A JavaScript library for building user interfaces
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="cdm-prompt m-3">
              <span>
                npm install react-bootstrap bootstrap
                <span className="blinking-text">|</span>
              </span>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://reactjs.org/">React.js</Card.Link>
          </Card.Body>
        </Card>

        {/* Auth0 */}
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/250" />
          <Card.Body>
            <Card.Title>
              <b style={{ color: "#eb5424" }}>Auth0</b>
            </Card.Title>
            <Card.Text>Authentication and authorization platform</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="cdm-prompt m-3">
              <span>
                npm install --save auth0-js react-router react-router-dom
                <span className="blinking-text">|</span>
              </span>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://auth0.com/">Auth0</Card.Link>
          </Card.Body>
        </Card>

        {/* Bootstrap */}
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/250" />
          <Card.Body>
            <Card.Title>
              <b style={{ color: "#7952b3" }}>Bootstrap</b>
            </Card.Title>
            <Card.Text>
              The most popular CSS Framework for developing responsive and
              mobile-first websites
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="cdm-prompt m-3">
              <span>
                npm install react-bootstrap bootstrap
                <span className="blinking-text">|</span>
              </span>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://getbootstrap.com/">Bootstrap</Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
};

export default CardDeckDep;
