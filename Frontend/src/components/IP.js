/* eslint-disable no-unused-vars */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  delhif  from "./imagegallery/Delhi Fashion Confluence Logo.png";
// import  bubf from "./imagegallery/barbeque.png";
import  fashionweek  from "./imagegallery/fashionweek.png";

// const BrandCollaboration = () => {
  

    const IP = () => {
    const brandLogos = [
    { id: 1, src:fashionweek },
    { id: 2, src: delhif },
   
  ];
    return (
      <>
        <h2 className="Heading-1 text-center py-5 mt-5">
          Intellectual Properties
        </h2>
        <Container  className="py-3  ">
         

          <Row
            className="justify-content-center py-5"
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            {/* <hr /> */}
            {brandLogos.map((logo) => (
              <Col xs={10} sm={6} md={4} lg={3} key={logo.id} className="p-4">
                <img
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  className="img-fluid"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </Col>
            ))}
            {/* <hr /> */}
          </Row>
        </Container>
      </>
    );
}

export default IP
