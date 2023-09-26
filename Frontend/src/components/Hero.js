import React from "react";
// import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import backimg from './images/eshower.jpg'
import "./App.css";

function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${backimg})`,

          height: 600, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 animate">Business E-Shower</h1>
              <h4 className="mb-3">What sets us Apart</h4>
              
              <a
                className="btn btn-outline-light btn-lg"
                href="/googleform"
                role="button"
              >
                Join our community{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
