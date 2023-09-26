/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';


// import offer1 from './imagegallery/mediarel.png'
import offer2 from './imagegallery/eventman.png'
import offer3 from './imagegallery/socialmm.png'
// import offer4 from './imagegallery/contentcreation.png'
import '../index.css'


const Public = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);


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


  


//   const modalStyle = `
//   .custom-modal .modal-dialog {
//     max-width: 800px;
//   }
// `;


  return (


    <>
      <Container>
        <h1 className="mt-5 text-white text-center">Public Relation</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{display:'flex' , justifyContent:'center'}}>
          
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_body">
            {/* <h4>Media Relations</h4>
            <h6>Media relations are a crucial aspect of any successful marketing strategy. It involves building and nurturing relationships with journalists, reporters, and media outlets to secure positive coverage for businesses. </h6> */}
            <h4>Media Outreach:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Media outreach refers to the strategic efforts and activities undertaken by individuals, organizations, or businesses to connect and engage with various forms of media, such as newspapers, magazines, television, radio, online publications, and social media platforms. We aim to achieve the goal of media outreach is to gain coverage and exposure for a specific message, story, product, event, or initiative. This can involve pitching press releases, arranging interviews, sending media kits, and building relationships with journalists and influencers to amplify the reach and impact of the content.
It is the strategic management of communication between an organization and its target audience, with the aim of building and maintaining a positive reputation. We help in activities such as media relations, crisis management, event planning, and social media engagement to influence public perception and foster goodwill.
 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_body">
            {/* <h4>Media Relations</h4>
            <h6>Media relations are a crucial aspect of any successful marketing strategy. It involves building and nurturing relationships with journalists, reporters, and media outlets to secure positive coverage for businesses. </h6> */}
            <h4>Publications:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Publications are a powerful marketing tool that provides businesses with a tangible platform to showcase their expertise and knowledge. By creating and distributing publications such as magazines, newsletters, or eBooks, businesses can establish themselves as thought leaders in their industry. Publications offer valuable content that educates, informs, and engages the target audience, building trust and credibility. They serve as a medium to share insights, industry trends, and innovative ideas, positioning the business as a go-to resource. Moreover, publications provide long-term visibility and can be shared digitally or in print, reaching a wide audience and strengthening brand recognition. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
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
      </Container>










     


    </>
  )
}

export default Public
