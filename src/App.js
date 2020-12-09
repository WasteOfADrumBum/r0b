// src/App.js

import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Callback from "./Callback/Callback";
import { Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";
import CardDeckDep from "./Components/CardDeck/CardDeckDep.jsx";
import CodeSnippets from "./Components/CodeSnippets/CodeSnippets.jsx";
import CreatorProfile from "./Components/CreatorProfile/CreatorProfile.jsx";
import License from "./Components/License/License.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import BrandName from "./Components/BrandName/BrandName.jsx";
import "./assets/styles/App.css";

// https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3
// TODO: Code style (https://github.com/standard/standard)

// Landing Page (HomePage)
function HomePage(props) {
  const { authenticated } = props;

  const logout = () => {
    props.auth.logout();
    props.history.push("/");
  };

  if (authenticated) {
    const { name, picture } = props.auth.getProfile();
    // if authenticated return the name of the user logged in
    return (
      <Container className="pl-5 pr-5">
        <Jumbotron className="mt-3">
          <Image
            src={picture}
            fluid
            roundedCircle
            style={{
              borderRadius: ".4rem",
              boxShadow: ".2rem .4rem .8rem #888888",
            }}
            className="p-1 mb-3"
          />
          <h1>
            Welcome to <BrandName />
          </h1>
          <h2>Glad to see you back, {name}. </h2>
          <p>
            This is a simple application designed to create a template for
            testing.
          </p>
          <p>
            <NavBar />
          </p>
          <p>
            <Button variant="outline-primary" onClick={logout}>
              Log out
            </Button>
          </p>
        </Jumbotron>
        <h2 className="mb-3">The Motivation Behind This Application</h2>
        <p>
          This project exisits to show my passion for coding. It has been built
          with all my favorite libraries, languages and dependencies. I was
          motivated to put together a clean application that showcased the
          abilities of some of the most lucrative programming that's on the web
          today. I plan on periodically updating this page with fun new
          components and features to grow and develop my skillset in the
          information technology industry. As a web developer my abilities will
          only mature with my ability to learn and practice my skills when
          sharing them with the world.
        </p>
        <p>
          <b>Languages:</b> I chose to use React.js as the foundation of the
          user interface, Auth0 for the Authentication and authorization
          platform as well as Bootstrap's CSS Framework for developing a
          responsive and mobile-first website.
        </p>
        <hr />
        <CardDeckDep />
        <hr />
        <h2 className="mb-4">Code Style, What is it!?</h2>
        <p>
          The beauty of JavaScript Standard Style is that it's simple. No one
          wants to maintain multiple hundred-line style configuration files for
          every module/project you work on.
        </p>
        <Row>
          <Col md={2} className="m-auto" style={{ textTransform: "uppercase" }}>
            <h4>Why I Use JavaScript Standard Style</h4>
          </Col>
          <Col md={8} className="text-left m-auto">
            <ul>
              <li>
                No configuration. Enforce consistent style in a project. It's
                easy, just drop it in.
              </li>
              <li>
                Automatically format code. Say goodbye to messy or inconsistent
                code.
              </li>
              <li>
                Catch style issues & programmer errors early. Saving review time
                by eliminating back-and-forth between reviewer & contributor.
              </li>
            </ul>
          </Col>
          <Col md={2} className="m-auto">
            <Image
              src="/assets/images/standard-javascript.png"
              fluid
              className="p-2"
            />
          </Col>
        </Row>
        <Button
          variant="outline-info"
          href="https://github.com/standard/standard"
          className="mt-2"
        >
          JavaScript Standard Style
        </Button>
        <hr />
        <h2 className="mb-4">Check Out These Features</h2>
        <div className="p-3 text-left">
          <Row className="pb-3">
            <Col md={12}>
              <b>React</b> is an open-source JavaScript frontend framework for
              building an intuitive and interactive user interface. It is widely
              adopted and a top choice among developers because of its great
              performance and simplicity in the rapid development of Single-Page
              Applications.
            </Col>
          </Row>
          <Row className="pb-3">
            <Col md={12}>
              <b>MongoDB</b> is a schema-less NoSQL database that can receive
              and store data in JSON-like documents. It takes away the idea of
              thinking and visualizing a database table in rows and columns. It
              allows you to be more productive by building JavaScript
              applications in a JSON format, making it not strange to any
              JavaScript developer. It supports arrays and nested objects values
              and allows for flexible and dynamic schemas. It is often used with
              <b> Mongoose</b>, an Object Data Modeling (ODM) library, that
              helps to manage relationships between data and provides schema
              validations.
            </Col>
          </Row>
          <Row className="pb-3">
            <Col md={12}>
              <b>TypeScript</b>, as described on its official website, is a
              superset of JavaScript that compiles down to plain JavaScript. It
              was designed and developed to help improve the productivity of
              developers when building large and complex programs by adding
              extra features that ensure the successful development of awesome
              applications with fewer bugs.
            </Col>
          </Row>
          <Row className="pb-5 text-center">
            <Col md={12}>
              <i>© Modern Full-Stack Development - Olususi Oluyemi</i>
            </Col>
          </Row>
        </div>
        <CodeSnippets />
        <hr />
        <h2 className="mb-4">Who Made This Awesome Application?</h2>
        <CreatorProfile />
        <hr />
        <License />
      </Container>
    );
  }
  // if not authentication login
  return (
    <Container className="vertical-center justify-content-center">
      <Jumbotron
        style={{
          border: "solid #888888 .1rem",
        }}
      >
        <h1 className="mb-3">Do I know you?</h1>
        <h2 style={{ fontFamily: "Lucida Handwriting, cursive" }}>
          Please, log in.
        </h2>
        <Button
          className="mt-3"
          variant="outline-primary"
          onClick={props.auth.login}
        >
          Log in
        </Button>
      </Jumbotron>
    </Container>
  );
}

// The App component responsible for deciding what
// component it must render. If the user is requesting
// the home page (i.e., the / route), the HomePage
// component is shown. If the user is requesting the
// callback page (i.e., /callback), then the Callback
// component is shown.

function App(props) {
  const authenticated = props.auth.isAuthenticated();

  return (
    <div className="App">
      <Route
        exact
        path="/callback"
        render={() => <Callback auth={props.auth} />}
      />
      <Route
        exact
        path="/"
        render={() => (
          <HomePage
            authenticated={authenticated}
            auth={props.auth}
            history={props.history}
          />
        )}
      />
    </div>
  );
}

export default withRouter(App);
