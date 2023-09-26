/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import offer1 from './images/uxdesigner.jpg'
import offer2 from './images/seo.jpg'
import offer3 from './images/socialmediaintegration.jpg'
import offer4 from './images/analyticsandtracking.jpg'
import offer5 from './images/mobileresponsiveness.jpg'
const Web = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

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

  const handleModalClose4 = () => {
    setShowModal4(false);
  };

  const handleImageClick4 = () => {
    setShowModal4(true);
  };


  const handleModalClose5 = () => {
    setShowModal5(false);
  };

  const handleImageClick5 = () => {
    setShowModal5(true);
  };


  return (
    <>
      
           <Container>
        <h1 className="mt-5 text-white text-center">Web Development</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{display:'flex' , justifyContent:'center'}} >
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>UX Designer</h2>

            </div>
          </Col>
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>SEO</h2>

            </div>
          </Col>
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Social Media Integration</h2>

            </div>
          </Col>
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick4} style={{cursor:'pointer'}}>
              <img src={offer4} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Analytics and Tracking</h2>

            </div>
          </Col>
          <Col md={4}className="mt-3">
            <div className="image-container" onClick={handleImageClick5} style={{cursor:'pointer'}}>
              <img src={offer5} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', fontSize:'25px',color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Mobile Responsiveness</h2>

            </div>
          </Col>
          
        </Row>
        </Container>


        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>UX Design:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>UX (User Experience) design is crucial for businesses looking to create intuitive and user-friendly digital experiences. It focuses on understanding user behaviours, needs, and preferences to optimize the usability and functionality of a website or application. By employing UX design principles, businesses can enhance customer satisfaction, reduce bounce rates, and increase conversions. UX design improves the overall user journey, making it seamless and enjoyable, resulting in higher engagement and retention. It also helps businesses gain a competitive edge by delivering exceptional user experiences that differentiate them from competitors. Ultimately, UX design is a valuable investment that leads to improved customer loyalty, positive brand perception, and business growth.
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
          <Modal.Body>
            <h4>SEO:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Search engine optimization (SEO) is the key to improving a website's visibility in search engine results and driving organic traffic. By optimizing website content, structure, and technical aspects, businesses can rank higher on search engine pages, increasing their chances of being discovered by potential customers. SEO enhances user experience, making websites faster, easier to navigate, and more user-friendly. It also builds trust and credibility, as users tend to trust websites that appear in top search results. Additionally, SEO is a cost-effective marketing strategy with long-term benefits, as it continues to drive organic traffic even after initial optimization efforts. With SEO, businesses can reach their target audience effectively and gain a competitive edge in the online marketplace.
 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Social Media Integration:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Social media integration is a powerful strategy that allows businesses to seamlessly connect their website with various social media platforms. By integrating social media icons, sharing buttons, and live feeds, businesses can expand their online presence, drive engagement, and boost brand visibility. Social media integration enables visitors to easily share content, increasing the reach and virality of the website. It also fosters a sense of social proof, as users can see real-time social media activity and endorsements. Moreover, social media integration provides valuable data and insights into user behaviour and preferences, enabling businesses to refine their marketing strategies for better results. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal4} onHide={handleModalClose4} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Analytics and Tracking:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Analytics and tracking are essential tools for businesses to gain insights into their online performance and make data-driven decisions. By implementing analytics tools and tracking codes on their website, businesses can monitor various metrics such as website traffic, user behaviour, conversions, and more. These insights enable businesses to understand their audience, identify areas for improvement, and optimize their marketing strategies. Analytics and tracking provide valuable data on customer preferences, allowing businesses to personalize their messaging and offerings. Additionally, it helps businesses measure the effectiveness of their campaigns, allocate resources efficiently, and ultimately drive better results and ROI.
 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal5} onHide={handleModalClose5} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Mobile Responsiveness:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Mobile responsiveness is crucial in today's digital landscape where mobile devices dominate internet usage. A website that is mobile-responsive adapts seamlessly to different screen sizes, ensuring a consistent and optimized user experience across devices. The benefits of mobile responsiveness are numerous: it improves user engagement, reduces bounce rates, and boosts conversion rates. A mobile-responsive website also enhances search engine visibility and rankings, as search engines prioritize mobile-friendly sites. Moreover, it builds trust and credibility among users, who expect a seamless mobile experience. By prioritizing mobile responsiveness, businesses can reach and engage a larger audience, drive more traffic, and ultimately increase their online success. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose5}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>




 {/* footer */}

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
  )
}

export default Web