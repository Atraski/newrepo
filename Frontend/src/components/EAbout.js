import {React,  useState } from "react";
// import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
// import { about } from "../imagegallery/bg.jpg";
import aboutimg from "./imagegallery/bg.jpg"
import Modal from "react-bootstrap/Modal";
import './App.css'
import Button from "react-bootstrap/Button";

const Abouts = () => {
  const [ModalShow, setModelShow] = useState(false);

  return (
    <>
      <div className="container py-3 py-md-5">
        <div className="row d-flex align-items-center justify-content-between  my-3">
          <div className="col-12 col-lg-6 d-block d-lg-none">
            <img
              src={aboutimg}
              alt=""
              className="img-fluid"
              style={{ widh: " 100%", Height: "23rem" }}
            />
          </div>

          <div className="col-12  align-items-sm-center col-lg-5">
            <text className="Heading-1 mb-2">
              WHAT SETS US APART 
            </text>
            <br />
            <div className="py-3">
              <text className="Text-1">
                Introducing Business E-Shower, a spectacular virtual gathering
                celebrating and supporting new businesses. Join entrepreneurs,
                industry leaders, and like-minded professionals from across the
                business landscape to forge connections, share insights, and
                inspire growth. Engage with a vibrant community through
                interactive platforms, networking, and idea exchange. Experience
                the convenience of connecting from your own screen. Whether
                you're a seasoned entrepreneur looking to expand your network or
                a budding business owner seeking inspiration and guidance, this
                event offers a unique opportunity to connect with like-minded
                individuals who share your drive and ambition
              </text>
            </div>

            <div className="row d-flex justify-content-between">
              <div className="col-6  col-lg-6 col-xl-6 py-2">
                
              </div>
              <div className="col-5  col-lg-5 col-xl-5  py-2">
                <div className="row d-flex justify-content-center align-items-center ">
                  <div className="col-11 px-0 ">
                    {/* <text className="">Watch now</text> */}
                    
                    <Modal
                      size="md"
                      show={ModalShow}
                      onHide={() => setModelShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                      centered
                      ClassName="p-4"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title
                          id="example-modal-sizes-title-lg"
                          className="border-0 text-center"
                        >
                          Fill the form
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="container mt-2 p-4">
                          <form onSubmit>
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="text"
                                id="name"
                                required
                                placeholder=" Your Name"
                              />
                            </div>
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="email"
                                id="email"
                                placeholder="  Phone Number"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="email"
                                id="email"
                                placeholder="Your country"
                                required
                              />
                            </div>
                            <Button
                              className="ModalBtn2"
                              style={{ width: "100%" }}
                            >
                              Submit
                            </Button>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block ">
            <img
              src={aboutimg}
              alt=""
              className="img-fluid"
              style={{ widh: " 100%", Height: "23rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Abouts;
