import React from "react";
import SocialCarousel from "../Carousel/SocialCarousel.jsx";
import { Row, Col, Image } from "react-bootstrap";
import CountTimer from "../CountTimer/CountTimer.jsx";
import { FaRegEnvelope, FaMobileAlt } from "react-icons/fa";

const CreatorProfile = () => {
  return (
    <>
      <h2 className="mb-4 section4">Who Made This Awesome Application?</h2>
      <div className="mt-4 creator-profile">
        <Row>
          <Col md={4} className="m-auto">
            <Image
              src="/assets/images/profile-picture-2.png"
              roundedCircle
              fluid
              style={{
                borderRadius: ".5rem",
                boxShadow: ".2rem .4rem .8rem #888888",
              }}
            />
          </Col>
          <Col md={8} className="text-left pt-4">
            <Row>
              <Col md={10}>
                <h3>Joshua M. Small</h3>
                <h5>Full-Stack Web Developer</h5>
              </Col>
              <Col md={2} className="m-auto">
                <a href="mailto:jmsmall89@gmail.com?subject='Personal Project'">
                  <FaRegEnvelope style={{ fontSize: "2rem", color: "black" }} />
                </a>
                <a href="tel:8283338983">
                  <FaMobileAlt style={{ fontSize: "2rem", color: "black" }} />
                </a>
              </Col>
            </Row>

            <p>
              Creative Full Stack Web Developer leveraging business and artistic
              background to build a more intuitive user experience on the web.
              Dedicated to the construction and optimizing the performance
              designs for high impact websites. Recently earned a certificate in
              Full Stack Web Development from The University of North Carolina
              at Chapel Hill. Newly equipped with a diverse and promising set of
              skills in CSS, JavaScript, React.js, and responsive web design.
              Adept in leveraging technical, analytical, and problem-solving
              skills to create dynamic high-speed competitive website advantages
              in fast-paced remote environments. I’ve worked independently and
              with teams of other developers to create a diverse portfolio that
              targets engagement with audiences for impactful user experiences
              using UX/UI. Continuously pursuing personal development and growth
              through practice, education, and experiences. I’m excited to
              leverage my skills as part of a fast-paced, quality-driven team to
              build better experiences on the web.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <SocialCarousel />
          </Col>
        </Row>
        <Row>
          <Col>
            <b>I've been leveling up my coding skills for:</b>
            <CountTimer />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreatorProfile;
