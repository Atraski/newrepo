/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1  from "./imagegallery/img1.webp";
import img11  from "./imagegallery/img2 (2).jpg";
import img12  from "./imagegallery/img3.jpg (2).webp";
import img13  from "./imagegallery/img4.webp";
import img14  from "./imagegallery/img5.webp";
import img15  from "./imagegallery/img6.webp";
import img16  from "./imagegallery/img11 (2).webp";
import img2  from "./imagegallery/img12 (2).jpg";
import img3  from "./imagegallery/img13 (2).jpg";
import img4  from "./imagegallery/img14 (2).jpg";
import img5  from "./imagegallery/img15 (2).jpg";
import img6  from "./imagegallery/img16 (2).webp";
import img7  from "./imagegallery/bigLogo (2).webp";
import logo  from "./imagegallery/bigLogo (2).webp";

 

const ImageGallery = () => {
  // Dummy image URLs
  const imageUrls = [
    { url: img1, alt: "Image 1" },
    { url: img2, alt: "Image 2" },
    { url: img12, alt: "Image 9" },
    { url: img13, alt: "Image 10" },

    { url: img3, alt: "Image 3" },
    // { url: img7, alt: "Image 7" },

    { url: img4, alt: "Image 4" },
    { url: img14, alt: "Image 11" },

    { url: img5, alt: "Image 5" },
    { url: img6, alt: "Image 6" },
    { url: img11, alt: "Image 8" },

    { url: img15, alt: "Image 12" },
    { url: img16, alt: "Image 12" },
  ];

  return (
    <Container fluid>
      <Row>
        {/* {imageUrls.map((imageUrl, index) => ( */}
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img1}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img2}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img12}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img13}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img14}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img3}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        {/* ))} */}
      </Row>

      <Row className="py-0">
        <marquee behavior="" direction="" scrollamount="10">
          {" "}
          ATRASKI &nbsp; | &nbsp; FASHION &nbsp; &nbsp; &nbsp; ATRASKI
          &nbsp;|&nbsp; FASHION &nbsp; &nbsp; ATRASKI &nbsp;|&nbsp; FASHION
          &nbsp; &nbsp; &nbsp; &nbsp;
          <img
            src={img7}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />{" "}
          ATRASKI | FASHION &nbsp; &nbsp; &nbsp; ATRASKI | FASHION &nbsp; &nbsp;
          &nbsp; ATRASKI | FASHION &nbsp; &nbsp; &nbsp;
        </marquee>
      </Row>

      <Row>
        {/* {imageUrls.map((imageUrl, index) => ( */}
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img4}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img14}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img5}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img6}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img11}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} xl={2} className="my-1">
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img15}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        {/* <Col xs={6} sm={4} md={3} lg={2}>
          <div className="image-box" style={{ width: "100%", height: "100%" }}>
            <img
              src={img16}
            //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col> */}
        {/* ))} */}
      </Row>
    </Container>
  );
};

export default ImageGallery;
