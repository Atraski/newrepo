/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import offer1 from './images/commercialshoot.jpg'
import offer2 from './images/productshoot.jpg'
import offer3 from './images/podcastshoot.jpg'
import '../index.css'



function Prod() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };


  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  const handleImageClick2 = () => {
    setShowModal2(true);
  };


  const handleModalClose3 = () => {
    setShowModal3(false);
  };

  const handleImageClick3 = () => {
    setShowModal3(true);
  };
  

    return (
        <>
           <Container>
        <h1 className="mt-5 text-white text-center">Production</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4">
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}  >
              <img src={offer1} alt="Image 1" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center',fontSize:'25px', backgroundColor:'#F9F5F6'}}>Commercial Shoot</h2>

            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center',fontSize:'25px', backgroundColor:'#F9F5F6'}}>Product Shoot</h2>

            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center',fontSize:'25px', backgroundColor:'#F9F5F6'}}>Podcast Shoot</h2>

            </div>
          </Col>
          
        </Row>
        </Container>


        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000">
          <Modal.Header closeButton >
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal">
            <h4>Commercial Shoots:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Commercial shoots are an effective way for businesses to create compelling visual content for marketing campaigns. By producing high-quality videos or images, businesses can showcase their products or services in an engaging and professional manner. Commercial shoots enable businesses to tell their brand story, evoke emotions, and capture the attention of their target audience. The visual appeal of commercial shoots helps in building brand recognition, attracting new customers, and increasing conversions. Additionally, commercial shoots offer versatility, allowing businesses to repurpose content for various marketing channels, including television, social media, and websites. Overall, commercial shoots are an essential tool for businesses to create impactful marketing materials that drive success.
 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>




        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000">
          <Modal.Header closeButton >
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal">
            <h4>Product Shoots:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Product shoots are a vital component of effective marketing strategies. They involve capturing high-quality images or videos of products to showcase their features, design, and benefits. By investing in professional product shoots, businesses can create visually appealing content that grabs the attention of potential customers. These visuals can be used across various platforms, including websites, social media, and advertising campaigns, to enhance product visibility and drive sales. Product shoots provide a clear and enticing representation of the product, allowing customers to make informed purchase decisions. They also help businesses establish a strong brand identity, build trust, and differentiate themselves from competitors.
 </h6>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000">
          <Modal.Header closeButton >
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal">
            <h4>Podcast Shoots:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Podcast shoots are a valuable way for businesses to create engaging audiovisual content. By recording and producing professional podcasts, businesses can connect with their audience on a deeper level and establish thought leadership. Podcast shoots allow for insightful conversations, interviews, and discussions that provide valuable industry insights and knowledge. They offer a personal and intimate connection with listeners, fostering brand loyalty and engagement. Additionally, podcast shoots can be repurposed into various formats, such as video snippets or transcriptions, expanding the reach and impact of the content. With podcast shoots, businesses can amplify their brand, expand their audience, and build a loyal community of listeners. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>





      

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


        </>
    );
}

export default Prod