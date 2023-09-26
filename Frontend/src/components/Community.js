import React from 'react';
import {Link} from 'react-router-dom';

const Community = () => {
  return (
    <>
      <div
        className="container-fluid p-5 text-center bg-image  align-items-center"
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
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <hr  />
              <h1 className="mb-3 animate">ATRASKI | FASHION</h1>
              <h4 className="mb-3">What sets us Apart</h4>

             <Link to="https://docs.google.com/forms/d/e/1FAIpQLScZQnWQvFPx93bm9BcxGlx5iaStnedB12fxl2F1n4g39fNEtA/viewform" className="btn btn-outline-light btn-lg mb-2" role="button">
             
                Join our community{" "}
              
              </Link>
             <hr/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
