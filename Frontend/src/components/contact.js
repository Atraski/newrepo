
import React, { useRef } from 'react'
import { useState } from 'react';

import emailjs from 'emailjs-com'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ur7cevn', 'template_s7jko4d', form.current, 'VBOwlrdUCvw7Qk5Nz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setFormSubmitted(true);

  };



  return (
    <>
    <Container className="contactContainer">
      {/* <h1 style={{color:'white'}}>Contact Us</h1> */}


      <Row>
        <Col>
          <div className="mob-text">
            <p className="text-blk contactus-head">Get in Touch</p>
            
          </div>
          <Form ref={form} onSubmit={sendEmail} class="form-container">

            {/* <Form onSubmit={handleSubmit} className="form-box"> */}
            <Row>
              <Col md={10}>
                <Form.Group controlId="firstName" id="name" className="text-white">
                  <Form.Label> NAME</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Please enter first name..." required />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group controlId="email" id="email" className="text-white">
                  <Form.Label>EMAIL</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Please enter email..." required />
                </Form.Group>
              </Col>
              {/* <Col md={10}>
                <Form.Group controlId="message" id="message" className="text-white">
                  <Form.Label>no</Form.Label>
                  <Form.Control type="textarea" name="user_n" placeholder="Please enter email..." required />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group controlId="email" id="email" className="text-white">
                  <Form.Label>message</Form.Label>
                  <Form.Control type="email" name="user_mg" placeholder="Please enter email..." required />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group controlId="phoneNumber" id="phoneNumber" className="text-white">
                  <Form.Label>PHONE NUMBER</Form.Label>
                  <Form.Control type="text" name="user_phone" placeholder="Please enter phone number..." required />
                </Form.Group>
              </Col> */}
              <Col md={10}>
                <Form.Group controlId="query" id="query" className="text-white">
                  <Form.Label>WHAT DO YOU HAVE IN MIND?</Form.Label>
                  <Form.Control as="textarea" name="user_email" rows={3} placeholder="Please enter query..." required />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>

          {formSubmitted && <p>Message submitted successfully!</p>}
        </Col>
        <Col md={7}>
          <div className="map-part">
            {/* <p className="text-blk map-contactus-head">Reach us at</p> */}
            <p className="text-blk map-contactus-subhead">
            Conact with us on social media </p>
            <div className="social-media-links mob">
              <a className="social-icon-link" href="https://twitter.com/AtraskiOfficial">
              <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="Twitter" />
              </a>
              <a className="social-icon-link" href="https://www.facebook.com/Atraski/">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="Facebook" />
              </a>
              {/* <a className="social-icon-link" href="#">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" alt="Google" />
              </a> */}
              <a className="social-icon-link" href="https://www.instagram.com/atraskiinspiringindia/">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" alt="Instagram" />
              </a>
            </div>
            <div className="map-box container-block">
              <div className="map-container">
              <iframe 
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.155085941714!2d77.24649377562001!3d28.535057875718103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b268970a15%3A0xc14659a35592332b!2so%2C%208%2C%20Block%20B%2C%20Chittaranjan%20Park%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1685513201117!5m2!1sen!2sin" 
              height="300vh"
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="map">

              </iframe>
              </div>
            </div>
          </div>
        </Col>
      </Row>


      {/* <label for="user_name">Name</label>
  <input type="text" id="user_name" name="user_name" required />

  <label for="user_email">Email</label>
  <input type="email" id="user_email" name="user_email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <input type="submit" value="Send" /> */}







    </Container>

       {/* footer starts  */}
       <footer className=" text-white" style={{backgroundColor:'#000'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
                <p><i className="fa fa-phone"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
            </div>
            <div className="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}

    </>
    // email
  );
};

export default ContactUs;
