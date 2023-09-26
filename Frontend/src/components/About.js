import React from 'react';
import about1 from './images/aboutus1.jpg';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import client2 from './images/brand2.png';
import client4 from './images/brand3.png';
import client5 from './images/brand4.jpg';
import client6 from './images/brand5.png';
import client7 from './images/brand6.jpg';
import client8 from './images/brand7.png';
import client9 from './images/brand9.png';
import client10 from './images/brand10.png';
import client11 from './images/brand11.png';
import client12 from './images/brand12.jpg';






const About = () => {


  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${about1})`,
      backgroundSize: 'cover',

    },
    heading: {
      textAlign: 'center',
      // marginLeft:'200px',
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      marginTop: '-35vh',

    },
    paragraph: {
      fontSize: '25px',
    }
  };


  
  //  media queries for different screen sizes
styles.paragraph['@media (max-width: 768px)'] = {
  fontSize: '20px',
};

styles.paragraph['@media (max-width: 480px)'] = {
  fontSize: '18px',
};
  return (
    <>


      <div style={styles.container}>
        {/* <h1 style={styles.heading}>About Us</h1> */}
        <Container>
          <Row>
            <Col>
              <h1 style={styles.heading}>About Us</h1>

              <p className="paragraph text-center mt-5" style={{fontSize:'20px'}}>
                At Atraski, we believe in inspiring India in a unique and innovative way. Every day, we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we have to offer.Atraski has made its presence felt across PAN India locations, and we have captured the hearts of millions with our unique offerings. We are constantly striving to be better than yesterday and are committed to delivering the best every day.
                <br></br> Thank you for choosing Atraski. We promise to inspire and delight you every step of the way.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <h1 className="text-white text-center" style={{ margin: '50px' }}>Our Clients</h1> */}



      {/* clients */}
      <div id="caraousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <h1 className="text-white text-center" style={{ margin: '50px' }}>Our Clients</h1>
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client2} className="img-fluid" alt="Client 1" style={{ fontSize: '20px' }} />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client4} className="img-fluid" alt="Client 2" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client5} className="img-fluid" alt="Client 3" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client6} className="img-fluid" alt="Client 4" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client7} className="img-fluid" alt="Client 5" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client8} className="img-fluid" alt="Client 6" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client9} className="img-fluid" alt="Client 7" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client10} className="img-fluid" alt="Client 8" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client11} className="img-fluid" alt="Client 9" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client12} className="img-fluid" alt="Client 10" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#clientSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#clientSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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





    </>
  )
}

export default About
