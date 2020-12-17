import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Features = () => {
  return (
    <>
      <h2 className="mb-4 section2">Check Out These Features</h2>
      <div className="p-3">
        <Row>
          <Col md={6} className="m-auto">
            <Image src="/assets/images/mern-stack.png" fluid className="p-5" />
          </Col>
          <Col md={6} className="text-left m-auto">
            <h3>
              The{" "}
              <span
                style={{
                  color: "#389c44",
                  WebkitTextStrokeWidth: ".1rem",
                  WebkitTextStrokeColor: "black",
                }}
              >
                M
              </span>
              .
              <span
                style={{
                  color: "#cd7871",
                  WebkitTextStrokeWidth: ".1rem",
                  WebkitTextStrokeColor: "black",
                }}
              >
                E
              </span>
              .
              <span
                style={{
                  color: "#276191",
                  WebkitTextStrokeWidth: ".1rem",
                  WebkitTextStrokeColor: "black",
                }}
              >
                R
              </span>
              .
              <span
                style={{
                  color: "#9bc148",
                  WebkitTextStrokeWidth: ".1rem",
                  WebkitTextStrokeColor: "black",
                }}
              >
                N
              </span>
              . Stack ↓
            </h3>
            <ul>
              <li>
                <b>MongoDB:</b> The document-based open source database
              </li>
              <li>
                <b>Express:</b> The Fast, unopinionated, minimalist framework
                for Node.js
              </li>
              <li>
                <b>React:</b> The front-end JavaScript library for building user
                interfaces
              </li>
              <li>
                <b>Node.js:</b> The JavaScript runtime built on Chrome’s V8
                JavaScript engine. Node.js brings JavaScript to the server
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pb-3 text-left">
          <Col md={12}>
            <b>React</b> is an open-source JavaScript frontend framework for
            building an intuitive and interactive user interface. It is widely
            adopted and a top choice among developers because of its great
            performance and simplicity in the rapid development of Single-Page
            Applications.
          </Col>
        </Row>
        <Row className="pb-3 text-left">
          <Col md={12}>
            <b>MongoDB</b> is a schema-less NoSQL database that can receive and
            store data in JSON-like documents. It takes away the idea of
            thinking and visualizing a database table in rows and columns. It
            allows you to be more productive by building JavaScript applications
            in a JSON format, making it not strange to any JavaScript developer.
            It supports arrays and nested objects values and allows for flexible
            and dynamic schemas. It is often used with
            <b> Mongoose</b>, an Object Data Modeling (ODM) library, that helps
            to manage relationships between data and provides schema
            validations.
          </Col>
        </Row>
        <Row className="pb-3 text-left">
          <Col md={12}>
            <b>TypeScript</b>, as described on its official website, is a
            superset of JavaScript that compiles down to plain JavaScript. It
            was designed and developed to help improve the productivity of
            developers when building large and complex programs by adding extra
            features that ensure the successful development of awesome
            applications with fewer bugs.
          </Col>
        </Row>
        <Row className="pb-3 text-left">
          <Col md={12}>
            <b>Express:</b> Express is a fast and lightweight web framework for
            Node.js. Express is an essential part of the MERN stack.
          </Col>
        </Row>
        <Row className="pb-3 text-left">
          <Col md={12}>
            <b>Body-parser:</b> Node.js body parsing middleware.
          </Col>
        </Row>
        <Row className="pb-3 text-left">
          <Col md={12}>
            <b>Cors:</b> CORS is a node.js package for providing an Express
            middleware that can be used to enable CORS with various options.
            Cross-origin resource sharing (CORS) is a mechanism that allows
            restricted resources on a web page to be requested from another
            domain outside the domain from which the first resource was served.
          </Col>
        </Row>

        <Row className="pb-5 text-center">
          <Col md={12}>
            <i>© Modern Full-Stack Development - Olususi Oluyemi</i>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Features;
