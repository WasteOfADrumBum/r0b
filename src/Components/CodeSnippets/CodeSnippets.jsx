import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
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
              <Row className="text-left mb-2">
                <Col md={6}>
                  <ul>
                    <li>
                      <b>auth0.js: </b>This is the default library to integrate
                      web applications with Auth0.
                    </li>
                    <li>
                      <b>react-router:</b> This is the de-facto library when it
                      comes to routing management in React.
                    </li>
                    <li>
                      <b>react-router-dom:</b> This is the extension to the
                      previous library to web applications.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      npm install --save auth0-js react-router react-router-dom
                    </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6}>
                  <p>
                    <ul>
                      <li>
                        <b>getProfile:</b> This function returns the profile of
                        the logged-in user.
                      </li>
                      <li>
                        <b>handleAuthentication:</b> This function looks for the
                        result of the authentication process in the URL hash.
                        Then, the function processes the result with the
                        parseHash method from auth0-js.
                      </li>
                      <li>
                        <b>isAuthenticated:</b> This function checks whether the
                        expiry time for the user's ID token has passed.
                      </li>
                      <li>
                        <b>login:</b> This function initiates the login process,
                        redirecting users to the login page.
                      </li>
                      <li>
                        <b>logout:</b> This function removes the user's tokens
                        and expiry time.
                      </li>
                      <li>
                        <b>setSession:</b> This function sets the user's ID
                        token, profile, and expiry time.
                      </li>
                    </ul>
                  </p>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      <var>getProfile() </var>&#123; return this.profile; &#125;
                    </code>
                    <br />
                    <br />
                    <code>
                      <var>handleAuthentication() </var>&#123; <br />
                      &#8195; return new Promise((resolve, reject) =&#62; &#123;{" "}
                      <br />
                      &#8195; &#8195; this.auth0.parseHash((err, authResult)
                      =&#62; &#123; <br />
                      &#8195; &#8195; &#8195; if (err) return reject(err);{" "}
                      <br />
                      &#8195; &#8195; &#8195; console.log(authResult); <br />
                      &#8195; &#8195; &#8195; if (!authResult ||
                      !authResult.idToken) &#123; <br />
                      &#8195; &#8195; &#8195; &#8195; return reject(err); &#125;
                      <br />
                      &#8195; &#8195; &#8195; this.setSession(authResult);
                      resolve(); <br />
                      &#8195; &#8195; &#125;); <br />
                      &#8195; &#125;) <br />
                      &#125; <br />
                    </code>
                    <code>
                      <var>isAuthenticated()</var> &#123; return new
                      Date().getTime() &#60; this.expiresAt; &#125;
                    </code>
                    <br />
                    <br />
                    <code>
                      <var>login()</var> &#123; this.auth0.authorize(); &#125;
                    </code>
                    <br />
                    <br />
                    <code>
                      <var>logout()</var> &#123; this.idToken = null;
                      this.expiresAt = null; &#125;
                    </code>
                    <br />
                    <br />
                    <code>
                      <var>setSession(</var>authResult<var>)</var> &#123;
                      <br />
                      &#8195;this.idToken = authResult.idToken;
                      <br />
                      &#8195;this.profile = authResult.idTokenPayload;
                      <br />
                      &#8195;this.expiresAt = authResult.expiresIn * 1000 + new
                      Date().getTime();
                      <br />
                      &#125;
                    </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6}>
                  <ul>
                    <li>
                      When using the Auth0 login page, users are taken away from
                      the application. However, after they authenticate, users
                      automatically return to the <b>callback</b> URL.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      function <var>Callback(</var>props<var>)</var> &#123;
                      <br />
                      &#8195; props.auth.handleAuthentication().then(() =&#62;
                      &#123; <br />
                      &#8195; props.history.push('/'); &#125;);
                    </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6}>
                  <ul>
                    <li>
                      Adding the <b>Auth</b> service to all the needed
                      components give the ability to wrap the router with a
                      global <b>Auth</b> instance to protect the routes.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      const <var>auth</var> = new Auth();
                      <br />
                      ReactDOM.render(
                      <br />
                      &#8195; &#60;BrowserRouter&#62; <br />
                      &#8195; &#8195; &#60;App auth= &#123; auth &#125;/&#62;
                      <br />
                      &#8195; &#60;/BrowserRouter&#62;,
                      <br />
                      &#8195; document.getElementById('root')
                      <br />
                      );
                    </code>
                  </div>
                </Col>
              </Row>
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
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>Jumbotron:</b> A lightweight, flexible component that
                      can optionally extend the entire viewport to showcase key
                      content.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      &lt;<var>Jumbotron</var> &gt;
                      <br />
                      &#8195; &lt;h1&gt;Do I know you?&lt;/h1&gt;
                      <br />
                      &#8195; &lt;h2&gt;Please, log in.&lt;/h2&gt;
                      <br />
                      &#8195; &lt;Button&gt;Log in&lt;/Button&gt;
                      <br />
                      &lt;/<var>Jumbotron</var>&gt;
                    </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>Accordion:</b> Accordions provide a way to restrict
                      Card components to only open one at a time.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>Rows & Cols:</b> Bootstrap’s grid system uses a series
                      of containers, rows, and columns to layout and align
                      content. It’s built with flexbox and is fully responsive.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      &lt;<var>Row</var>&gt;
                      <br />
                      &#8195; &lt;<var>Col</var> md={2} className="m-auto"
                      style=&#123;&#123; textTransform: "uppercase"
                      &#125;&#125;&gt;
                      <br />
                      &#8195; &#8195; &lt;h4&gt;Why I Use JavaScript Standard
                      Style&lt;/h4&gt;
                      <br />
                      &#8195; &lt;/<var>Col</var>&gt;
                      <br />
                      &#8195; &lt;<var>Col</var> md=&#123;8&#125;
                      className="text-left m-auto"&gt;
                      <br />
                      &#8195; &#8195; &lt;ul&gt;
                      <br />
                      &#8195; &#8195; &#8195; &lt;li&gt;
                      <br />
                      &#8195; &#8195; &#8195; &#8195; No configuration. Enforce
                      consistent style in a project. It's easy, just drop it in.
                      <br />
                      &#8195; &#8195; &#8195; &lt;/li&gt;
                      <br />
                      &#8195; &#8195; &#8195; &lt;li&gt;
                      <br />
                      &#8195; &#8195; &#8195; &#8195; Automatically format code.
                      Say goodbye to messy or inconsistent code.
                      <br />
                      &#8195; &#8195; &#8195; &lt;/li&gt;
                      <br />
                      &#8195; &#8195; &#8195; &lt;li&gt;
                      <br />
                      &#8195; &#8195; &#8195; &#8195; Catch style issues &
                      programmer errors early. Saving review time by eliminating
                      back-and-forth between reviewer & contributor.
                      <br />
                      &#8195; &#8195; &#8195; &lt;/li&gt;
                      <br />
                      &#8195; &#8195; &lt;/ul&gt;
                      <br />
                      &#8195; &lt;/<var>Col</var>&gt;
                      <br />
                      &#8195; &lt;<var>Col</var> md=&#123;2&#125;
                      className="m-auto"&gt;
                      <br />
                      &#8195; &#8195; &lt;Image
                      src="/assets/images/standard-javascript.png" fluid
                      className="p-2" /&gt;
                      <br />
                      &#8195; &lt;/<var>Col</var>&gt;
                      <br />
                      &lt;/<var>Row</var>&gt;
                      <br />
                    </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>Buttons:</b> Custom button styles for actions in forms,
                      dialogs, and more with support for multiple sizes, states,
                      and more.
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>
                      &lt;<var>Button</var> <br />
                      &#8195;className="mt-3" <br />
                      &#8195;variant="outline-primary" <br />
                      &#8195;onClick=&#123;props.auth.login&#125;
                      <br />
                      &gt;
                      <br />
                      &#8195;Log in
                      <br />
                      &lt;/<var>Button</var>&gt;
                      <br />
                    </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-center mb-2">
                <Col md={12} className="m-auto pt-3">
                  <i>© https://react-bootstrap.github.io/</i>
                </Col>
              </Row>
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
            <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>create-react-app (CRA):</b> text
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>react-router:</b> text
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>react-dom:</b> text
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>react-router-dom:</b> text
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>react-icons:</b> text
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
              <Row className="text-left mb-2">
                <Col md={6} className="m-auto">
                  <ul>
                    <li>
                      <b>react-scripts:</b> text
                    </li>
                  </ul>
                </Col>
                <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
                  <div className="code-box">
                    <code>Code </code>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default CodeSnippets;
