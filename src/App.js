// src/App.js

import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Callback from "./Callback/Callback";
import "./assets/styles/App.css";
import { Jumbotron, Button, Container } from "react-bootstrap";
import CardDeckDep from "./Components/CardDeck/CardDeckDep.jsx";

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
    const { name } = props.auth.getProfile();
    // if authenticated return the name of the user logged in
    return (
      <Container className="pl-5 pr-5">
        <Jumbotron className="mt-3">
          <h1>Glad to see you back, {name}.</h1>
          <p>
            This is a simple application designed to create a template for
            testing.
          </p>
          <p>
            <Button variant="outline-primary" onClick={logout}>
              Log out
            </Button>
          </p>
        </Jumbotron>
        <h2>The Motivation Behind This Application</h2>
        <p>
          A short description of the motivation behind the creation and
          maintenance of the project. This should explain why the project
          exists.
        </p>
        <hr />
        <CardDeckDep />
        <hr />
        <h2>Code Style, What is it!?</h2>
        <p>
          The beauty of JavaScript Standard Style is that it's simple. No one
          wants to maintain multiple hundred-line style configuration files for
          every module/project you work on.
        </p>
        <h3>Why I Use JavaScript Standard Style</h3>
        <ul>
          <li>
            No configuration. The easiest way to enforce consistent style in
            your project. Just drop it in.
          </li>
          <li>
            Automatically format code. Just run standard --fix and say goodbye
            to messy or inconsistent code.
          </li>
          <li>
            Catch style issues & programmer errors early. Save precious code
            review time by eliminating back-and-forth between reviewer &
            contributor.
          </li>
        </ul>
        <Button
          variant="outline-info"
          href="https://github.com/standard/standard"
        >
          JavaScript Standard Style
        </Button>
        <hr />
        <h2>Check Out These Features</h2>
        <h3>Code Snippets</h3>
        <p>
          Show what the library does as concisely as possible, developers should
          be able to figure out how your project solves their problem by looking
          at the code example. Make sure the API you are showing off is obvious,
          and that your code is short and concise.
        </p>
        <hr />
        <h2>Who Made This Awesome Application?</h2>
        <hr />
        <h2>Licensed To Code</h2>
        <p>A short snippet describing the license (MIT, Apache etc)</p>
      </Container>
    );
  }
  // if not authentication login
  return (
    <Container className="vertical-center justify-content-center">
      <Jumbotron>
        <h1>Do I know you? Please, log in.</h1>
        <Button className="mt-3" variant="outline-primary" onClick={props.auth.login}>
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
