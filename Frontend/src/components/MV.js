/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  mission from "./imagegallery/goal.png";
import  vission  from "./imagegallery/view.png";

const MV = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col
          md={6}
          className="text-center py-4"
          data-aos="zoom-out-right"
          data-aos-duration="2000"
        >
          <div className="text-center">
            <img
              src={mission}
              alt="Image 1"
              style={{ width: "30%", height: "30%" }}
            />
          </div>
          <h2 className="Heading-1 py-2" style={{ color: "pink" }}>
            OUR MISSION
          </h2>{" "}
          <p className="" style={{ textAlign: "justify" }}>
            Atraski Fashion strives to revolutionize the modelling industry. We
            sculpt raw talent and give their passion a shape, empower them with
            opportunities and valuable experiences ensuring an impactful
            commencement of the models into the fashion industry.
          </p>{" "}
        </Col>

        <Col
          md={6}
          className="text-center py-4"
          data-aos="zoom-out-left"
          data-aos-duration="2000"
        >
          <div className="text-center">
            <img
              src={vission}
              alt="Image 1"
              style={{ width: "30%", height: "30%" }}
            />
          </div>
          <h2 className="Heading-1 py-2" style={{ color: "pink" }}>
            OUR VISION
          </h2>{" "}
          <p className="" style={{ textAlign: "justify" }}>
            We aim at building a comforting space where everyone can aspire to
            become a model even if they don’t fit the fashion industry
            norm/standard. We believe in providing hands-on experience to our
            models and help them to build a credible portfolio to set up a
            network/ community of young and talented student models, artists,
            photographers who find it tough to enter the industry
          </p>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default MV;
