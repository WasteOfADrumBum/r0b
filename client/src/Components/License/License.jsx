import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  RiScales3Line,
  RiCheckLine,
  RiCloseLine,
  RiInformationLine,
} from "react-icons/ri";

const License = () => {
  return (
    <>
      <h2 className="mb-5 section5">Licensed To Code</h2>
      <Row className="text-left mb-5">
        <Col md={6}>
          <Row>
            <Col md={2}>
              <RiScales3Line style={{ fontSize: "3rem" }} />
            </Col>
            <Col md={10} className="mb-2">
              This project is licensed under the
              <br />
              <h5>
                <b>MIT License</b>
              </h5>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <p>
                A short and simple permissive license with conditions only
                requiring preservation of copyright and license notices.
                Licensed works, modifications, and larger works may be
                distributed under different terms and without source code.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <p>
                <b>Permissions</b>
              </p>
              <p>
                <RiCheckLine style={{ color: "green" }} />
                Commercial use
              </p>
              <p>
                <RiCheckLine style={{ color: "green" }} />
                Modification
              </p>
              <p>
                <RiCheckLine style={{ color: "green" }} />
                Distribution
              </p>
              <p>
                <RiCheckLine style={{ color: "green" }} />
                Private use
              </p>
            </Col>
            <Col md={4}>
              <p>
                <b>Limitations</b>
              </p>
              <p>
                <RiCloseLine style={{ color: "red" }} />
                Liability
              </p>
              <p>
                <RiCloseLine style={{ color: "red" }} />
                Warranty
              </p>
            </Col>
            <Col md={4}>
              <p>
                <b>Conditions</b>
              </p>
              <p>
                <RiInformationLine style={{ color: "blue" }} />
                License and copyright notice
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default License;
