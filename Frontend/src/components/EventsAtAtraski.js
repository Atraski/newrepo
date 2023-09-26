import React from 'react'
import { events } from './imagegallery';

const EventsAtAtraski = () => {
  return (
    <div className="row my-3 py-3 py-md-5 px-2 d-flex justify-content-center align-items-center">
      <h1 className="Heading-1 text-center"> EVENTS AT ATRASKI</h1>
      {/* <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4 text-start py-3"> */}
      <div
        className="ps-0 ps-sm-4 m-2 p-3 w-sm-9 d-flex justify-content-center"
      >
        <img
          src={events}
          alt=""
          className="img-fluid"
          style={{
            width: "70rem",
            borderRadius: "14px",
            boxShadow: " 0 4px 8px 0 white, 0 6px 20px 0 pink",
          }}
        />
      </div>

      {/* <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
        <text className="Heading-1">About Us</text>
        <br />
        <div className=" Text-1 py-3 ">
          <p>
            Atraski Fashion is the runway where we groom our models; upcoming
            fashionistas to make a giant leap into the real world of fashion
            with brilliance and extraordinaire!
          </p>
          <p>
            The sole mission of Atraski Fashion is to sculpt raw talent and give
            shape to passion in order to facilitate their strong commencement
            into the fashion spree.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default EventsAtAtraski
