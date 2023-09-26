/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import offer1 from './images/influencermarketing.jpg'


const Marketing = () => {

  return (
<>

<Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
<Card className="bg-dark text-white" style={{ maxWidth: '30rem' }}>
  <Card.Img variant="top" src={offer1} />
  <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 130, left: 0, width: '100%', textAlign: 'center'}}>Influencer Marketing</h2>

  <Card.Body>
    <Card.Text className="text-white text-center" style={{fontFamily:"sans-serif"}}>
    Influencer marketing has become a powerful strategy for businesses to reach their target audience through influential individuals in their respective industries. By partnering with relevant influencers, businesses can leverage their credibility and large following to promote their products or services. Influencer marketing provides authentic and relatable content, increasing brand awareness and driving customer engagement. It helps businesses tap into niche markets and reach a highly targeted audience.
    </Card.Text>
  </Card.Body>
</Card>

    </Container>




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

export default Marketing
