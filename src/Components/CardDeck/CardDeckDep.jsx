import React from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardDeck,
  Button,
} from "react-bootstrap";
import "../../assets/styles/CardDeckDep.scss"

const CardDeckDep = () => {
  return (
    <>
      {/* Banner */}
      <Row className="justify-content-md-center">
        <Col className="m-auto pb-2" m="auto">
          <h2>This Applications Promenant Dependencies</h2>
        </Col>
      </Row>

      <CardDeck className="pb-5">
        {/* React */}
        <Card>
          <Card.Img className="p-5" variant="top" src="/assets/images/react-logo.png" />
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
            <Button variant="outline-info" href="https://reactjs.org/">React.js</Button>
          </Card.Body>
        </Card>

        {/* Auth0 */}
        <Card>
          <Card.Img className="p-5" variant="top" src="/assets/images/auth0-logo.png" />
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
            <Button variant="outline-info" href="https://auth0.com/">Auth0</Button>
          </Card.Body>
        </Card>

        {/* Bootstrap */}
        <Card>
          <Card.Img className="p-5" variant="top" src="/assets/images/bootstrap-logo.png" />
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
            <Button variant="outline-info" href="https://getbootstrap.com/">Bootstrap</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
};

export default CardDeckDep;
