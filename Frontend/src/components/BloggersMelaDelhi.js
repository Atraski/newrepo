import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BloggerMelaDelhi.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BannerImage from './images/Banner.jpg';
import Image3 from './images/8.jpg';
import AkashImage from './images/akash.png';
import Ambassador1 from './images/Ambassador1.jpg';
import Ambassador01 from './images/Ambassador01.jpg';
import Ambassador02 from './images/Ambassador02.jpg';
import Ambassador03 from './images/Ambassador03.jpg';
import Ambassador04 from './images/Ambassador04.jpg';
import Ambassador05 from './images/Ambassador05.jpg';
import Ambassador06 from './images/Ambassador06.jpg';
import Ambassador07 from './images/Ambassador07.jpg';
import Ambassador08 from './images/Ambassador08.jpg';
import Ambassador09 from './images/Ambassador09.jpg';
import Ambassador10 from './images/Ambassador10.png';
import Ambassador11 from './images/Ambassador11.png';
import Ambassador12 from './images/Ambassador12.jpg';
import Ambassador13 from './images/Ambassador13.jpeg';
import Ambassador14 from './images/Ambassador14.jpeg';
import Ambassador15 from './images/Ambassador15.jpeg';
import Ambassador16 from './images/Ambassador16.jpeg';
import Ambassador17 from './images/Ambassador17.jpeg';
import pannel1 from './images/pannelist01.png';
import pannel2 from './images/pannelist02.png';
import pannel3 from './images/pannelist03.png';
import pannel5 from './images/pannelist05.png';
import pannel6 from './images/Panlist06.jpg';
import pannel7 from './images/Panlist07.jpg';
import pannel8 from './images/Panlist09.jpg';
import pannel9 from './images/Panlist10.jpg';
import pannel10 from './images/Panlist11.jpg';
import pannel11 from './images/Panlist12.jpg';
import pannel14 from './images/Panlist14.jpg';
import pannel15 from './images/Panlist15.jpg';
import pannel16 from './images/Panlist16.jpg';
import pannel17 from './images/Panlist17.jpg';
import pannel18 from './images/Panlist18.jpg';
import pannel19 from './images/Panlist19.jpg';
import pannel20 from './images/Panlist20.jpeg';
import pannel21 from './images/Panlist21.jpeg';
import pannel22 from './images/Panlist22.jpeg';
import pannel23 from './images/Panlist23.jpeg';
import pannel24 from './images/Panlist24.jpeg';
import pannel25 from './images/Panlist25.jpeg';
import pannel26 from './images/Panlist26.jpeg';

import brand1 from './images/AMRI.png';
import brand2 from './images/bigb.png';
import brand3 from './images/chai-break-logo.jpg';
import brand4 from './images/dalmia.png';
import brand5 from './images/Elleven-Logo_.png';
import brand6 from './images/feedingIndia.png';
import brand7 from './images/frespreso.jpg';
import brand8 from './images/gdgpng.png';
import brand9 from './images/hero.png';









function BloggerMelaDelhi() {
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
    <>
      <div className="container-fluid blog-delhi">
        <div className='blog-heading'> <h1 className='heading-1'>Bloggers Mela Delhi</h1></div>
        <div className='blog-image'>
          <div className='blog-image-2'></div>
          
        </div>
        {/* <div className='blog-heading'><h1 className='heading-2'>events in delhi </h1></div> */}
        <div className='ques'>
          <div className='conatiner-fluid ques1 my-4'>
            <h1 className='p-3 para'>What is Bloggers Mela Delhi</h1>
            <p className='p-3 para'> Blogger’s Mela is all about paving the way for newcomers who have started their own journey as bloggers.  
Blogger’s Mela brings together visionaries, the thoughts of the panelists and established bloggers to explore the journey of a blogger, discuss emerging trends, and share insights on future innovation. The event is offering a platform for all the newcomers to connect, learn and be inspired.
</p>
          </div>
          <div className='conatiner-fluid ques1  my-4'>
          <h1 className='p-3 para'>What will be happening</h1>
            <p className='p-3 para'> in which we are giving opportunity to ambassador and panellist to have good interaction with brands, also bloggers who have just started there journey will be able to have a clear vision after this event we will have fashion show, Fun activities, pop up stalls and panel discussion
            .We have Nitin Gupta as fashion influencer and Mehak & Rituraj as travel blogger’s and Khushboo as food blogger and Fatehh singh as digital creator and Paritosh Anand as creative director, entrepreneur and public speaker 
</p>
          </div>
          <div className='conatiner-fluid ques1  my-4'>
          <h1 className='p-3 para'>Why should Register</h1>
            <p className='p-3 para'>   The event is an opportunity aimed at aspiring bloggers to conduct an insightful session with well-known brands, panelists and successful bloggers. The event is offering a platform for all the newcomers to connect, learn and be inspired.
This year's event is going to be graced by renowned bloggers such as Nitin Gupta as a fashion influencer, Mehek and Rituraj as Travel Blogger, Khushboo as a food Blogger , Fatehh Singh as a digital creator, Paritosh Anand as a creative director, an entrepreneur, a public speaker and many more.

</p>
          </div>
          </div>
          <div className='container-fluid big-box'>
          <div className='container-fluid small-box'>

          <div className='ambasador mt-4'><h1 className=''>Ambassadors</h1></div>
   
          
      <Slider {...settings}>
        
      <div className="card cardss" >
        <div className="card-top">
          <img src={Image3} alt="" />

        </div>
      </div>

      


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador01} alt="" />

        </div>
      </div>


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador02} alt="" />

        </div>
      </div>

      {/* <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador03} alt="" />

        </div>
      </div> */}


      {/* <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador04} alt="" />

        </div>
      </div> */}


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador05} alt="" />

        </div>
      </div>


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador06} alt="" />

        </div>
      </div>


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador07} alt="" />

        </div>
      </div>


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador08} alt="" />

        </div>
      </div>


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador09} alt="" />

        </div>
      </div>


      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador10} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador11} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador12} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador13} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador14} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador15} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador16} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={Ambassador17} alt="" />

        </div>
      </div>

      
      </Slider>

          





  </div>



   


  




   


</div>


<div className='container-fluid big-box'>
<div className='container-fluid small-box'>
<div className='container-fluid ambasador mt-4'><h1 className=''>Panelist</h1></div>

<Slider {...settings}>
        
      <div className="card cardss">
        <div className="card-top">
          <img src={pannel1} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={AkashImage} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel2} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel3} alt="" />

        </div>
      </div>

      

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel5} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel6} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel7} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel8} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel9} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel10} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel11} alt="" />

        </div>
      </div>

     

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel14} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel15} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel16} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel17} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel18} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel19} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel20} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel21} alt="" />

        </div>
      </div>

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel22} alt="" />

        </div>
      </div>

     
      

      <div className="card cardss" >
        <div className="card-top">
          <img src={pannel26} alt="" />

        </div>
      </div>


  </Slider>    


</div>


</div>
  </div>

  <div className='brands'>
  <div className='container-fluid brands-class'><h1 className='h2'>Brands We Have Worked With</h1></div>

  <div className="slider2">
<div className="slide-track2">
  {/* <div className="slide2" style={{ marginLeft: "120px" }}>
    <img
      src="https://thumbs.dreamstime.com/b/tęczy-miłości-serca-tło-60045149.jpg"
      style={{
        padding: "2% 10% 2% 5%",
        width: "100%",
        margin: "auto",
        height: "auto",
      }}
      height="100"
      width="250"
      alt=""
    />
  </div> */}
  <div className="slide2">
    <img
      src="https://thumbs.dreamstime.com/b/tęczy-miłości-serca-tło-60045149.jpg"
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  {/* <div className="slide2">
    <img
      src="https://thumbs.dreamstime.com/b/tęczy-miłości-serca-tło-60045149.jpg"
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        // margin: "auto",
        height: "50px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div> */}
  <div className="slide2">
    <img
      src={brand1}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand2}
      className="customzoom2"
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2" style={{ width: "150px" }}>
    <img
      src={brand3}
      style={{
        padding: "2% 10% 2% 5%",

        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand4}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2" style={{ width: "250px" }}>
    <img
      src={brand5}
      style={{
        padding: "2% 10% 2% 5%",

        width: "400px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand6}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand7}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand8}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand9}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand1}
      style={{
        padding: "2% 5% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand2}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand3}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand4}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
  <div className="slide2">
    <img
      src={brand5}
      style={{
        padding: "2% 10% 2% 5%",
        width: "350px",
        height: "70px",
      }}
      height="100"
      width="300"
      alt=""
    />
  </div>
</div>
</div>
</div>



 
      <div className='container-fluid ques2'>
        <Link to="/productviewpage" target='_blank' style={{ textDecoration: "none" }}>
          <h1 className='heading-3'>Register For Bloggers Mela Delhi</h1>
        </Link>
      </div>
    </>
  );

}

export default BloggerMelaDelhi;
