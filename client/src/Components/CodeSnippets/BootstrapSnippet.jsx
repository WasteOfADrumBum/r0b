import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/styles/CodeSnippets.scss";

const BootstrapSnippets = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6} className="m-auto">
          <ul>
            <li>
              <b>Jumbotron:</b> A lightweight, flexible component that can
              optionally extend the entire viewport to showcase key content.
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
              <b>Accordion:</b> Accordions provide a way to restrict Card
              components to only open one at a time.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              &#60;<var>Accordion</var> defaultActiveKey="0"&#62;
              <br />
              &#8195; &#60;Card&#62; <br />
              &#8195; &#8195; &#60;<var>Accordion</var>.Toggle
              as=&#123;Card.Header&#125; eventKey="0"&#62; <br />
              &#8195; &#8195; &#8195; &#60;h4&#62; <br />
              &#8195; &#8195; &#8195; &#8195; &#60;b&#62;Auth0:&#60;/b&#62;
              Authentication & Authorization
              <br />
              &#8195; &#8195; &#8195; &#60;/h4&#62; <br />
              &#8195; &#8195; &#60;/<var>Accordion</var>.Toggle&#62; <br />
              &#8195; &#8195; &#60;<var>Accordion</var>.Collapse
              eventKey="0"&#62;
              <br />
              &#8195; &#8195; &#8195; &#60;Card.Body&#62; <br />
              &#8195; &#8195; &#8195; &#8195; &#60;Row className="text-left
              mb-2"&#62; <br />
              &#8195; &#8195; &#8195; &#8195; &#8195; &#60;Col md=&#123;6&#125;
              &#62; <br />
              &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#60;ul&#62;{" "}
              <br />
              &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195;
              &#60;li&#62; <br />
              &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195;
              &#60;b&#62; auth0.js: &#60;/b&#62; This is the default library to
              integrate web applications with Auth0.
              <br />
              &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195;
              &#60;/li&#62; <br />
              &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#60;/ul&#62;{" "}
              <br />
              &#8195; &#8195; &#8195; &#8195; &#60;/Row&#62; <br />
              &#8195; &#8195; &#8195; &#60;/Card.Body&#62; <br />
              &#8195; &#8195; &#60;/<var>Accordion</var>.Collapse&#62; <br />
              &#8195; &#60;/Card&#62; <br />
              &#60;/<var>Accordion</var>&#62; <br />
            </code>
          </div>
        </Col>
      </Row>
      <Row className="text-left mb-2">
        <Col md={6} className="m-auto">
          <ul>
            <li>
              <b>Rows & Cols:</b> Bootstrap’s grid system uses a series of
              containers, rows, and columns to layout and align content. It’s
              built with flexbox and is fully responsive.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              &lt;<var>Row</var>&gt;
              <br />
              &#8195; &lt;<var>Col</var> md={2} className="m-auto"
              style=&#123;&#123; textTransform: "uppercase" &#125;&#125;&gt;
              <br />
              &#8195; &#8195; &lt;h4&gt;Why I Use JavaScript Standard
              Style&lt;/h4&gt;
              <br />
              &#8195; &lt;/<var>Col</var>&gt;
              <br />
              &#8195; &lt;<var>Col</var> md=&#123;8&#125; className="text-left
              m-auto"&gt;
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
              &#8195; &#8195; &#8195; &#8195; Automatically format code. Say
              goodbye to messy or inconsistent code.
              <br />
              &#8195; &#8195; &#8195; &lt;/li&gt;
              <br />
              &#8195; &#8195; &#8195; &lt;li&gt;
              <br />
              &#8195; &#8195; &#8195; &#8195; Catch style issues & programmer
              errors early. Saving review time by eliminating back-and-forth
              between reviewer & contributor.
              <br />
              &#8195; &#8195; &#8195; &lt;/li&gt;
              <br />
              &#8195; &#8195; &lt;/ul&gt;
              <br />
              &#8195; &lt;/<var>Col</var>&gt;
              <br />
              &#8195; &lt;<var>Col</var> md=&#123;2&#125; className="m-auto"&gt;
              <br />
              &#8195; &#8195; &lt;Image
              src="/assets/images/standard-javascript.png" fluid className="p-2"
              /&gt;
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
              dialogs, and more with support for multiple sizes, states, and
              more.
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
    </>
  );
};

export default BootstrapSnippets;
