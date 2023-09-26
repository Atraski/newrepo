/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { location, map } from "../assets";

const City = () => {
  return (
    <Container>
      <h1 className="text-center my-5">Cities Associated with</h1>
      <Row className="col-12 justify-content-center ">
        {/* <Col
          sm={12}
          className="py-5"
          data-aos="fade-right"
          data-aos-duration="3000"
        > */}
        {/* <Row> */}
        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center align-items-center">
            <Image
              src="mumbai.png"
              fluid
              style={{ width: "50px", height: "50px", margin: "5px" }}
            />{" "}
            &nbsp; &nbsp;
            <h4>Mumbai</h4>
          </div>
        </Col>
        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center">
            <Image
              src="kol.png"
              fluid
              style={{ width: "40px", height: "40px" }}
            />
            &nbsp; &nbsp;
            <h4>Kolkata</h4>
          </div>
        </Col>
        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center">
            <Image
              src={location}
              fluid
              style={{ width: "40px", height: "40px" }}
            />
            <h4>Mumbai</h4>
          </div>
        </Col>

        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center">
            <Image
              src={location}
              fluid
              style={{ width: "40px", height: "40px" }}
            />
            <h4>Mumbai</h4>
          </div>
        </Col>
        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center">
            <Image
              src={location}
              fluid
              style={{ width: "40px", height: "40px" }}
            />
            <h4>Mumbai</h4>
          </div>
        </Col>
        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center">
            <Image
              src={location}
              fluid
              style={{ width: "40px", height: "40px" }}
            />
            <h4>Mumbai</h4>
          </div>
        </Col>
        <Col xs={6} md={3} className="py-5">
          <div className="box d-flex justify-content-center">
            <Image
              src={location}
              fluid
              style={{ width: "40px", height: "40px" }}
            />
            <h4>Mumbai</h4>
          </div>
        </Col>

        {/* </Row> */}
        {/* </Col> */}
        {/* <Col
          sm={6}
          className="d-flex p-5 justify-content-center align-items-center"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Image src={map} fluid />
        </Col> */}
      </Row>
    </Container>
  );
};

export default City;
