/* eslint-disable no-unused-vars */
import React from "react";

import  img1 from "./imagegallery/img12.jpg";
import  img2 from "./imagegallery/img12.jpg";
import  img3 from "./imagegallery/img12.jpg";
import  img4 from "./imagegallery/img12.jpg";
import  img5 from "./imagegallery/img12.jpg";
import  img6 from "./imagegallery/img12.jpg";
import  img7 from "./imagegallery/img12.jpg";
import  img11 from "./imagegallery/img12.jpg";
import  img12 from "./imagegallery/img12.jpg";
import  img13 from "./imagegallery/img12.jpg";
import  img14 from "./imagegallery/img12.jpg";
import  img15 from "./imagegallery/img12.jpg";
import  img16 from "./imagegallery/img12.jpg";
import Test from "./Test";
import  bannerimg from "./imagegallery/barbeque.png";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NewBanner from "./Newbanner";
import Aboutus from "./Aboutus";
import MV from "./MV";
import BrandCollaboration from "./Collaboration";
import IP from "./IP";
import Cities from "./Cities";
import Community from "./Community";
import M from "./Models";
import WhatweOffer from "./Services";
import Cart from './Cart'
// import Header from './components/navbar';
// import Aboutus from './components/Aboutus';
// import Services from './components/Services';
// import NewBanner from './components/Newbanner';
// import MV from './components/MV';
// import BrandCollaboration from './components/Collaboration';
// import Test from './components/Test/Test';
// import Community from './components/Community';
// import IP from './components/IP';
// import Cities from './components/Cities';

const Section1 = () => {
 

  return (
    <div style={{ backgroundColor: "black", color: "gainsboro" }}>
      <NewBanner />
      <Aboutus />
      <MV />
      <BrandCollaboration />
      {/* <Ser /> */}
       <WhatweOffer /> 
      <IP />
      <Cities />
 {/* <M /> */}
 <Test />
 {/* <Cart></Cart> */}
 <Community />
 
      
  
      {/* <Tes /> */}
      {/* <Comm /> */}

    </div>
  );
};

export default Section1;
