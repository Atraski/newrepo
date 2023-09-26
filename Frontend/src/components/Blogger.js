import React from 'react';
// import './Upcoming.css';
import './Blogger.css';
import './BloggerMelaDelhi.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'react-bootstrap';

import { Link} from 'react-router-dom';
import blogger1 from './imagegallery/Piyush-1.jpg'
import group1 from './images/group1 (1).jpeg'
import group2 from './images/group1 (2).jpeg'
import group3 from './images/group1 (3).jpeg'
import group4 from './images/group1 (4).jpeg'
import group5 from './images/Goa (1).jpeg'
import group7 from './images/group7.jpeg'
import Image3 from './images/8.jpg';
import AkashImage from './images/akash.png';
import Ambassador1 from './images/Ambassador1.jpg';
import Ambassador01 from './images/Ambassador01.jpg';
import Ambassador02 from './images/Ambassador02.jpg';


import blogger2 from './imagegallery/Sumedha-1.jpg'
import blogger3 from './imagegallery/Simran-2.jpg'
import blogger4 from './imagegallery/anmol.jpg'
import blogger5 from './imagegallery/img8.jpg'
import blogger6 from './imagegallery/ishani.jpg'
import blogger7 from './imagegallery/Huma.jpg'
import blogger8 from './imagegallery/vishnu.jpg'
import fashion from './imagegallery/AT-Fashion-Logo.png.webp';
import img1 from './images/img1.JPG'
import img2 from './images/img2.JPG'
import img3 from './images/img3.JPG'
import img4 from './images/img4.JPG'
import img5 from './images/img5.JPG'
// import img6 from './images/img6.JPG'
import img7 from './images/img7.JPG'
import img8 from './images/img8.JPG'
import img9 from './images/img9.JPG'
import img10 from './images/img10.JPG'
import click from './images/clickHere.gif';











import Upcoming from './Upcoming';
// import bloger from '../components/imagegallery/blogger.png';
import vedio1 from './images/Blogger.mp4'


const Blogger = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (

    <div className='bg-white w-100'>
      <div className='blog-heading1'><h1>Bloogers' Mela</h1></div>
      <div className='container-fluid blogger-1'>
        <video controls autoPlay muted>
          <source src={vedio1}></source>
        </video>
      {/* <video preload="auto" class="videot" id="videot" height="100%" preload />
    <source src="BESTANDEN/video/tible.mp4" type="video/mp4"/>
    <object data="BESTANDEN/video/tible.mp4" height="1080">
        <param name="wmode" value="transparent"/>
        <param name="autoplay" value="false"/>
        <param name="loop" value="false"/>
    </object> */}

      </div>
    <div>
      {/* <h1 className="text-center  text-warning " style={{ margin: '20px' }}>Blogger's Mela</h1>
      <h3 className="text-center  text-warning" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3> */}




      <div className='blogger-4 container-fluid mt-5'>
      <Container className='py-5' >
      <h1 className="text-center  text-white fs-1" style={{ margin: '20px',fontWeight:"600"  }}>Blogger's Mela</h1>
      <h3 className="text-center  text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3>


      <Row>
        <Col md={6}>
          <Row>
          <Col md={6} sm={12} className="gallery-col k1">
              <img src={blogger1} alt="Image 1"className='row1' />
              <div className="image-overlay mm">
                  <span className="image-title">PIYUSH RATHI</span>
              </div>
            </Col>
            <Col md={6} sm={12} className="gallery-col k1">
            <img src={blogger2} alt="Image 1"className='row1' />
            <div className="image-overlay mm">
                  <span className="image-title">SUMEDHA SHARMA</span>
              </div>
            </Col>
          </Row>
          <Row >
          <Col md={6} sm={12} className="gallery-col k1">
            <img src={blogger3} alt="Image 1"className='row1' />
            <div className="image-overlay mm ">
                  <span className="image-title">SIMRAN POPTANI</span>
              </div>
            </Col>
            <Col md={6}  sm={12} className="gallery-col k1">
            <img src={blogger4} alt="Image 1" className='row1'/>
            <div className="image-overlay mm">
                  <span className="image-title">ANMOL WADHWANI </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
          <Col md={6} sm={12} className="gallery-col k1">
            <img src={blogger5} alt="Image 1" className='row1' />
            <div className="image-overlay mm">
                  <span className="image-title">PRARTHANA JAGAN</span>
              </div>
            </Col>
            <Col md={6} sm={12} className="gallery-col k1">
            <img src={blogger6} alt="Image 1"className='row1' />
            <div className="image-overlay mm">
                  <span className="image-title">ISHANI MITRA</span>
              </div>
            </Col>
          </Row>
          <Row >
          <Col md={6} sm={12} className="gallery-col k1">
            <img src={blogger7} alt="Image 1"className='row1' />
            <div className="image-overlay mm">
                  <span className="image-title">HUMA JOAD</span>
              </div>
            </Col>
            <Col md={6} sm={12} className="gallery-col k1">
            <img src={blogger8} alt="Image 1"className='row1' />
            <div className="image-overlay mm">
                  <span className="image-title">VISHNU KAUSHAL</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>


      {/* <div class="bgallery">
        <div class="bgallery-item">
          <img src={blogger1} alt="Image 1" />
          <div class="image-popups">PIYUSH RATHI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger2} alt="Image 2" />
          <div class="image-popups">SUMEDHA SHARMA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger3} alt="Image 3" />
          <div class="image-popups">SIMRAN POPTANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger4} alt="Image 4" />
          <div class="image-popups">ANMOL WADHWANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger5} alt="Image 5" />
          <div class="image-popups">PRARTHANA JAGAN</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger6} alt="Image 6" />
          <div class="image-popups">ISHANI MITRA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger7} alt="Image 7" />
          <div class="image-popups">HUMA JOAD</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger8} alt="Image 8" />
          <div class="image-popups">VISHNU KAUSHAL</div>
        </div>
      </div> */}
      {/* Gallery  */}

   {/* // */}
   {/* <div>
   <Upcoming />
   </div> */}
   {/* //    */}


{/* <div> */}

      {/* <h2 className=" text-warning text-center" style={{ margin: '50px' }}>What Falls Us Apart</h2>
      <p className=" text-warning text-center" style={{ margin: '50px' }}>Bloggers Mela has become a highly anticipated and sought-after event for bloggers in
        India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.
        Bloggers Mela truly encapsulates the spirit of community, creativity, and collaboration
        within the blogging industry.</p>
      <h3 className="  text-warning text-center" style={{ margin: '50px' }}>Perks of Registering for Bloggers Mela:</h3>
      <ul className="circle text-warning text-center" style={{ margin: '50px', position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <h6 className=' text-warning'>● Be a member of AtBuzz bloggers community</h6>
        <h6 className=' text-warning'>● Networking with other bloggers</h6>
        <h6 className=' text-warning'>● Direct contacts with Brands</h6>
        <h6 className=' text-warning'>● Be a part of a fun-filled event</h6>
      </ul> */}
      {/* </div> */}
      <div className='bloggger-2 mt-5'>
        <div className='blogger-3 container-fluid my-3'>
          <h1 className='mb-3'>Lets Talk About it?</h1>
          <p> <span className='fw-bold '>Bloggers' Mela,</span> having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.</p>
        </div>
        <div className='blogger-3  container-fluid my-3'>
          <h1  className='mb-3'>How it is impacting the bloggers' community?</h1>
          <p>  <span className='fw-bold'>Networking opportunities:</span> Bloggers' events provide an excellent platform for bloggers to network and connect with like-minded individuals. <br></br>
          <span className='fw-bold'>Knowledge sharing and learning :</span> These events often feature workshops, panels, and presentations from experienced bloggers and industry experts. <br></br> 
          <span className='fw-bold'>Inspiration and motivation:</span> Being surrounded by fellow bloggers who are passionate about their craft can be incredibly inspiring
          </p>
        </div>
        <div className='blogger-3  container-fluid my-3'>
          <h1  className='mb-3'>How it is impacting the bloggers' Brands?</h1>
          <p>  <span className='fw-bold'>Increased visibility:</span>  Attending bloggers' events can increase a blogger's visibility within the community and the industry.<br></br>
          <span className='fw-bold'>Networking with brands:</span>  Bloggers' events often attract brands looking for influencer collaborations and partnerships.<br></br>
            <span className='fw-bold'>Establishing authority and expertise: </span> Being invited to speak or participate in panels at bloggers' events can position the blogger as an authority in their niche.  </p>
        </div>
        <div></div>
        <div></div>
        <div className='blogger-4 container-fluid mt-5'>
      <h1 className="text-center  text-white fs-1" style={{ margin: '20px', fontWeight:"600" }}>Blogger's Mela Moments</h1>

      <div className='py-5 rowm' >





          
      {/* <h3 className="text-center  text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3> */}
       <div className='rowm1'>
          <div className=" mb-3 gallery-col className='mx-3'">
              <img src={group1} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
              <div >
                  <span className="image-title">Delhi Event</span>
              </div>
            </div>
            <div className="mb-3 gallery-col className='mx-3'">
            <img src={group2} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div>
                  <span className="image-title">Delhi Event</span>
              </div>
            </div>
          
        
          <div className="mb-3 gallery-col className='mx-3'">
            <img src={group3} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div >
                  <span className="image-title">Kolkata Event</span>
              </div>
            {/* </div> */}
            </div>
            {/* <div className='rowm1'> */}
            <div className="gallery-col className='mx-3'">
            <img src={group4} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div >
                  <span className="image-title">Kolkata Event</span>
              </div>
            </div>
          


          

         <div  className="gallery-col className='mx-3'">
            <img src={group5} alt="Image 1"style={{borderRadius:'20px',margin:"3px" , border:'5px solid #fff'}} className='m5' />
            <div >
                  <span className="image-title">Goa Event</span>
              </div>
            </div>
            <div className="gallery-col">
            <img src={group7} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div >
                  <span className="image-title">Kolkata Event</span>
              </div>
            </div>
            </div>
            {/* <Col md={6} className="gallery-col">
            <img src={blogger6} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">ANMOL WADHWANI</span>
              </div>
            </Col> */}

          {/* <Col md={6} className="gallery-col">
            <img src={blogger7} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">HUMA JOAD</span>
              </div>
            </Col> */}
            {/* <Col md={6} className="gallery-col">
            <img src={blogger8} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">VISHNU KAUSHAL</span>
              </div>
            </Col>  */}


    </div>
  

    </div>
    <div className='container-fluid slide1 mt-5'>
      <div className='container-fluid slide2'>
      <h1 className="text-center  fs-1" style={{ margin: '20px', fontWeight:"600",color:"#fc0c8c" }}>Blogger's Mela Moments</h1>

<Slider {...settings}>
        
        <div className="card cardss" >
          <div className="card-top">
            <img src={img1} alt="" />
  
          </div>
        </div>
  
        
  
  
        {/* <div className="card cardss" >
          <div className="card-top">
            <img src={img2} alt="" />
  
          </div>
        </div> */}
  
   
        <div className="card cardss" >
          <div className="card-top">
            <img src={img3} alt="" />
  
          </div>
        </div> 
        {/* <div className="card cardss" >
          <div className="card-top">
            <img src={img4} alt="" />
  
          </div>
        </div>
   */}
        
  
  
        <div className="card cardss" >
          <div className="card-top">
            <img src={img5} alt="" />
  
          </div>
        </div>
  
  
        {/* <div className="card cardss" >
          <div className="card-top">
            <img src={img6} alt="" />
  
          </div>
        </div> */}
          <div className="card cardss" >
          <div className="card-top">
            <img src={img7} alt="" />
  
          </div>
        </div>
          <div className="card cardss" >
          <div className="card-top">
            <img src={img8} alt="" />
  
          </div>
        </div>
          <div className="card cardss" >
          <div className="card-top">
            <img src={img9} alt="" />
  
          </div>
        </div>
          <div className="card cardss" >
          <div className="card-top">
            <img src={img10} alt="" />
  
          </div>
        </div>

        </Slider>
        </div>

</div>
    
    <div
        className="container-fluid p-5 text-center bg-image align-items-center"
        style={{
        //   backgroundImage: `url(${backimg})`,

        //   height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mask py-5 align-items-center"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="text-white join-community">
              <hr  />
              <h1 className="mb-3 animate">Bloggers Mela</h1>
             <Link to="/bloggersMelaDelhi" style={{textDecoration:"none"}} target="_blank" ><button className="mb-3 " style={{backgroundColor:'transparent' , color:'black'}}>Bloggers' Mela</button></Link>

             <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfL2TUQ3g42Qhe7x5kJWVrIzTYsvozYoVH9hNC8a4nAr5Dibg/viewform" target="_blank" className="btn btn-outline-dark btn-lg mb-2" role="button">

                Join our community{" "}




              </Link>
             <hr/> 
            </div>
          </div>
        </div>
      </div>


      </div>



        {/* footer starts  */}
        <footer className="  text-warning" style={{backgroundColor:'#333'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
                <p><i className="fa fa-phone"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
            </div>
            <div className="col-md-6 text-md-right  text-warning">
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
    </div>
  )
}

export default Blogger
