import React from "react";
import SocialCarousel from "../Carousel/SocialCarousel.jsx";
import { Row, Col, Image } from "react-bootstrap";
import CountTimer from "../CountTimer/CountTimer.jsx"

const CreatorProfile = () => {

  return (
    <div className="mt-4">
      <Row>
        <Col md={4}>
          <Image
            src="https://via.placeholder.com/200"
            roundedCircle
            fluid
            style={{
              borderRadius: ".5rem",
              boxShadow: ".2rem .4rem .8rem #888888",
            }}
          />
        </Col>
        <Col md={8} className="text-left">
          <h4>Joshua M. Small</h4>
          <h5>Full-Stack Web Developer</h5>
          <CountTimer/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Social Carousel Placeholder</p>
          <SocialCarousel />
        </Col>
      </Row>
    </div>
  );
};

export default CreatorProfile;
