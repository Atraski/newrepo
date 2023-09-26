import React from 'react'
import { about } from './imagegallery';

const Aboutus = () => {
  return (
    <div className="container-fluid collab col-12 row m-0 py-5 py-md-5 px-2 my-5 d-flex justify-content-around align-items-center">
      <div
        className="col-lg-4 d-none d-lg-block ps-0 ps-sm-4 text-center text-lg-start "
        data-aos="fade-right"
        data-aos-duration="3000"
        style={{background:'none'}}
      >
        <text className="Heading-1 my-3" style={{background:'none'}}>About Us</text>
        <br /> 
        <div className=" Text-1 py-3 " style={{background:'none'}}>
          <p style={{background:'none'}}>
            Atraski Fashion is the runway where we groom our models; upcoming
            fashionistas to make a giant leap into the real world of fashion
            with brilliance and extraordinaire!
          </p>
          <p style={{background:'none'}}>
            The sole mission of Atraski Fashion is to sculpt raw talent and give
            shape to passion in order to facilitate their strong commencement
            into the fashion spree.
          </p>
        </div>
      </div>

      <div
        className="col-12 col-lg-5 py-3   py-lg-0 "
        style={{ width: "500px", height: "500px" , background:'none', background:'none' }}
        data-aos="fade-left"
        data-aos-duration="3000"
        
        
      >
        <img
          src={about}
          alt=""
          className="img-fluid"
          style={{ width: " 100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="col-11  d-block d-lg-none ps-0 ps-sm-4 "
        data-aos="fade-right"
        data-aos-duration="3000"
        style={{background:'none'}}
      >
        <text className="Heading-1 my-3 " style={{background:'none'}}>About Us</text>
        <br />
        <div className=" Text-1 py-3 " style={{background:'none'}}>
          <p style={{background:'none'}}>
            Atraski Fashion is the runway where we groom our models; upcoming
            fashionistas to make a giant leap into the real world of fashion
            with brilliance and extraordinaire!
          </p>
          <p style={{background:'none'}}>
            The sole mission of Atraski Fashion is to sculpt raw talent and give
            shape to passion in order to facilitate their strong commencement
            into the fashion spree.
          </p>
        </div>
      </div>
    </div>
  );
}   

export default Aboutus;

