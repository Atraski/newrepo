/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
// import event from './imagegallery/event.jpg'
import subimg1 from './imagegallery/dealer.png'
import subimg2 from './imagegallery/stall.png'
import subimg3 from './imagegallery/launch.png'
import subimg4 from './imagegallery/atlbtl.png'
// import eventimg1 from './imagegallery/w1.jpeg'
// import eventimg2 from './imagegallery/w2.jpeg'
// import eventimg3 from './imagegallery/w3.jpeg'
// import eventimg4 from './imagegallery/w4.jpeg'
import eventimg5 from './imagegallery/w5.jpeg'
import e1 from './images/e15.jpg';
import e2 from './images/e16.png';
import e3 from './images/e17.png';
import e4 from './images/e18.png';
import audi from './images/audi.jpg'

import portfolio1 from './images/e1.jpg'
import portfolio2 from './images/e2.jpg'
import portfolio3 from './images/e3.jpg'
import portfolio4 from './images/e4.jpg'
import portfolio5 from './images/e5.jpg'
import portfolio6 from './images/e6.jpg'
import portfolio7 from './images/e7.jpg'


import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  '../index.css';



function Event1() {

    // const headerStyle = {
    //     backgroundImage: `url(${event})`,
    //     backgroundSize: '1297px',
    //     backgroundAttachment: 'fixed',
    //     backgroundRepeate:'no-repeate',
    //     height: '30vh',
    //     position: 'relative',
    // };

    // const headingStyle = {
    //     color: '#ffffff',
    //     fontSize: '2rem',
    //     textTransform: 'uppercase',
    //     textAlign: 'center',
    // };
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };

    const handleModalClose2 = () => {
      setShowModal2(false);
    };

    const handleModalClose3 = () => {
      setShowModal3(false);
    };

    const handleModalClose4 = () => {
      setShowModal4(false);
    };
  
    const handleImageClick = () => {
      setShowModal(true);
    };

    const handleImageClick2 = () => {
      setShowModal2(true);
    };

    const handleImageClick3 = () => {
      setShowModal3(true);
    };

    const handleImageClick4 = () => {
      setShowModal4(true);
    };



    return (
        <>
            {/* <header style={headerStyle}>
                <h1 style={headingStyle}></h1>
            </header> */}
            <div className="container">
              <h1 className="text-center mb-3 font-weight-bold">Events</h1>
                <h2 className="text-center">Unforgettable moments, boundless possibilities</h2>
            </div>
            {/* cards */}
            <Container>
        {/* <h1 className="mt-5 text-white text-center"></h1> */}
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor'}}>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={subimg1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={subimg2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={subimg3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick4} style={{cursor:'pointer'}}>
              <img src={subimg4} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Dealers Meet:</h4>
            <h9>Dealers Meet is a valuable event for businesses to connect and engage with their dealers or distributors. It provides an opportunity for face-to-face interactions, fostering stronger relationships and building trust. Dealer meets allow businesses to showcase their products or services, share updates, and address any concerns or queries. The event enables dealers to gain deeper insights into the company's offerings and align their strategies accordingly. It also promotes networking and knowledge sharing among dealers, leading to collaboration and mutual growth. By organizing dealer meets, businesses can strengthen their dealer network, boost sales, and gain a competitive edge in the market.
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Stall Fabrication:</h4>
            <h9>Stall fabrication is a valuable service that helps businesses create impactful and visually appealing exhibition stalls. It involves designing and constructing customized stalls that effectively showcase products and engage with the target audience. With stall fabrication, businesses can create a unique brand presence at trade shows, exhibitions, and events, standing out from competitors. The well-designed stalls create a memorable experience for visitors, attracting more footfall and generating leads. Additionally, stall fabrication allows for creative branding opportunities, with the flexibility to incorporate branding elements, interactive displays, and multimedia content. It helps businesses leave a lasting impression, build brand awareness, and drive business growth.
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Launch Events:</h4>
            <h9>Launch events are a dynamic way for businesses to introduce new products or services to their target audience. These events create buzz, excitement, and anticipation, generating valuable publicity and media coverage. By organizing a well-planned launch event, businesses can showcase their offerings, highlight key features, and demonstrate their unique value proposition. Launch events provide an opportunity to engage with potential customers directly, gather feedback, and generate immediate sales. They also serve as a platform for networking with industry influencers and stakeholders, fostering valuable partnerships. Overall, launch events help businesses create a strong market presence, boost brand visibility, and pave the way for long-term success.
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal4} onHide={handleModalClose4} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>ATL & BTL Activities:</h4>
            <h9>ATL (Above the Line) and BTL (Below the Line) activities are essential components of a comprehensive marketing strategy. ATL activities, such as television, radio, and print advertising, enable businesses to reach a wide audience and build brand awareness on a large scale. BTL activities, including direct mail, email marketing, and experiential marketing, focus on targeted engagement with specific customer segments. These activities offer personalized interactions, generate leads, and drive conversions. By combining both ATL and BTL activities, businesses can create a holistic marketing approach that maximizes reach, builds customer relationships, and ultimately leads to business growth.</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>


            {/* cards */}

            {/* portfolio */}
            <div class="portfolio">
                <h1 style={{ textAlign: 'center', color: 'white', margin: '50px' }}>Our Portfolio</h1>
                <div class="row mb-3" >
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio1} alt="Image 1"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio2} alt="Image 2"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio3} alt="Image 3"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio4} alt="Image 4"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio5} alt="Image 1"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio6} alt="Image 2"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio7} alt="Image 3"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={audi} alt="Image 4"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={e1} alt="Image 1"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={e2} alt="Image 2" className="w-2"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={e3} alt="Image 3"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={e4} alt="Image 4"/>
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* footer starts  */}
      <footer className=" text-white" style={{backgroundColor:'#333'}}>
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

            </div>

            {/* portfolio */}
           




        </>
    );
}

export default Event1