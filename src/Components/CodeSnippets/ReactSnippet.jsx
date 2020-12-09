import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/styles/CodeSnippets.scss";

const ReactSnippets = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6} className="m-auto">
          <ul>
            <li>
              <b>create-react-app (CRA):</b> A comfortable environment for
              building a new single-page application in React. It sets up your
              development environment so that you can use the latest JavaScript
              features, provides a nice developer experience, and optimized the
              app for production.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>npx creat-react-app r0b </code>
          </div>
        </Col>
      </Row>
      <Row className="text-left mb-2">
        <Col md={6} className="m-auto">
          <ul>
            <li>
              <b>react-router:</b> A collection of navigational components that
              compose declaratively with the application.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              ReactDOM.render(
              <br />
              &#8195;&#60;BrowserRouter&#62;
              <br />
              &#8195;&#60;App auth=&#123;auth&#125; /&#62;
              <br />
              &#8195;&#60;/BrowserRouter&#62;,
              <br />
              &#8195;document.getElementById("root")
              <br />
              );{" "}
            </code>
          </div>
        </Col>
      </Row>
      <Row className="text-left mb-2">
        <Col md={6} className="m-auto">
          <ul>
            <li>
              <b>react-icons:</b> This feature enabled the use of popular icons
              utilizing ES6 imports that allows the inclusion of only the icons
              this project is using.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              import &#123; FaRegEnvelope &#125; from "react-icons/fa";
              <br />
              <br />
              &#60;FaRegEnvelope style=&#123;&#123; <br />
              &#8195;fontSize: "2rem", color: "black" <br />
              &#125;&#125;/&#62;
            </code>
          </div>
        </Col>
      </Row>
      <Row className="text-left mb-2">
        <Col md={6} className="m-auto">
          <ul>
            <li>
              <b>react-scripts:</b> This set of scripts from the
              create-react-app helped kick off ths project without configuring
              the initial setup for the project.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              "scripts": &#123;
              <br />
              &#8195;"start": "react-scripts start",
              <br />
              &#8195;"predeploy": "npm run build",
              <br />
              &#8195;"deploy": "gh-pages -d build",
              <br />
              &#8195;"build": "react-scripts build",
              <br />
              &#8195;"test": "react-scripts test",
              <br />
              &#8195;"eject": "react-scripts eject"
              <br />
              &#125;,
            </code>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ReactSnippets;
