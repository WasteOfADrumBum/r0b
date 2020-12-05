// src/App.js

import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Callback from "./Callback/Callback";
import "./App.css";
import { Jumbotron, Button, Container } from "react-bootstrap";
import CardDeckDep from "./Components/CardDeck/CardDeckDep.jsx";

// Landing Page (HomePage)

function HomePage(props) {
  const { authenticated } = props;

  const logout = () => {
    props.auth.logout();
    props.history.push("/");
  };

  if (authenticated) {
    const { name } = props.auth.getProfile();
    // if authenticated return the name of the user logged in
    return (
      <Container>
        <Jumbotron>
          <div class="wrapper">
            <h1 class="title" data-text="Yes!">
              Yes!
            </h1>
          </div>
          <h1>Glad to see you back, {name}.</h1>
          <p>
            This is a simple application designed to create a template for
            testing.
          </p>
          <p>
            <Button variant="primary" onClick={logout}>
              Log out
            </Button>
          </p>
        </Jumbotron>

        <CardDeckDep />
      </Container>
    );
  }
  // if not authentication login
  return (
    <Container>
      <Jumbotron>
        <h1>Do I know you? Please, log in.</h1>
        <p>
          <Button variant="primary" onClick={props.auth.login}>
            Log in
          </Button>
        </p>
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
