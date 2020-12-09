import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/styles/CodeSnippets.scss";

const Auth0Snippets = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6}>
          <ul>
            <li>
              <b>auth0.js: </b>This is the default library to integrate web
              applications with Auth0.
            </li>
            <li>
              <b>react-router:</b> This is the de-facto library when it comes to
              routing management in React.
            </li>
            <li>
              <b>react-router-dom:</b> This is the extension to the previous
              library to web applications.
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
          <ul>
            <li>
              <b>getProfile:</b> This function returns the profile of the
              logged-in user.
            </li>
            <li>
              <b>handleAuthentication:</b> This function looks for the result of
              the authentication process in the URL hash. Then, the function
              processes the result with the parseHash method from auth0-js.
            </li>
            <li>
              <b>isAuthenticated:</b> This function checks whether the expiry
              time for the user's ID token has passed.
            </li>
            <li>
              <b>login:</b> This function initiates the login process,
              redirecting users to the login page.
            </li>
            <li>
              <b>logout:</b> This function removes the user's tokens and expiry
              time.
            </li>
            <li>
              <b>setSession:</b> This function sets the user's ID token,
              profile, and expiry time.
            </li>
          </ul>
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
              &#8195; return new Promise((resolve, reject) =&#62; &#123; <br />
              &#8195; &#8195; this.auth0.parseHash((err, authResult) =&#62;
              &#123; <br />
              &#8195; &#8195; &#8195; if (err) return reject(err); <br />
              &#8195; &#8195; &#8195; console.log(authResult); <br />
              &#8195; &#8195; &#8195; if (!authResult || !authResult.idToken)
              &#123; <br />
              &#8195; &#8195; &#8195; &#8195; return reject(err); &#125;
              <br />
              &#8195; &#8195; &#8195; this.setSession(authResult); resolve();{" "}
              <br />
              &#8195; &#8195; &#125;); <br />
              &#8195; &#125;) <br />
              &#125; <br />
            </code>
            <code>
              <var>isAuthenticated()</var> &#123; return new Date().getTime()
              &#60; this.expiresAt; &#125;
            </code>
            <br />
            <br />
            <code>
              <var>login()</var> &#123; this.auth0.authorize(); &#125;
            </code>
            <br />
            <br />
            <code>
              <var>logout()</var> &#123; this.idToken = null; this.expiresAt =
              null; &#125;
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
              When using the Auth0 login page, users are taken away from the
              application. However, after they authenticate, users automatically
              return to the <b>callback</b> URL.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              function <var>Callback(</var>props<var>)</var> &#123;
              <br />
              &#8195; props.auth.handleAuthentication().then(() =&#62; &#123;{" "}
              <br />
              &#8195; props.history.push('/'); &#125;);
            </code>
          </div>
        </Col>
      </Row>
      <Row className="text-left mb-2">
        <Col md={6}>
          <ul>
            <li>
              Adding the <b>Auth</b> service to all the needed components give
              the ability to wrap the router with a global <b>Auth</b> instance
              to protect the routes.
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
    </>
  );
};

export default Auth0Snippets;
