import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const carde = {
  //  color: "#6641AA",
  //  fontWeight: "800",
  border: "none",
  textAlign: "center",
  borderRadius: "10px",
  height: "100%",
  maxHeight: "auto",
  backgroundColor: "rgb(255, 216, 222)",
  color: "black",

  //   width: "300px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};
const topic = {
  fontWeight: "600",
  fontSize: "18px",
  //   color: color.dark,
  margin: "5px",
};
const model = {
  backgroundColor: "rgb(255, 216, 222)",
};


function OfferCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleColumnClick = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className="col-12  col-md-6 col-lg-3 my-3 py-2 py-md-1 Card "
      key={data?.key}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div
        className="row d-flex justify-content-center align-items-start   m-auto p-3  "
        style={carde}
        onClick={() => handleColumnClick(data)}
      >
        <div
          className="icon rounded-circle p-2 my-3 d-flex justify-content-center align-items-center"
          style={{
            // backgroundColor: color.shadowGrey,
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={data?.icon}
            alt="icon"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <text className="Heading-2 text-center" style={topic}>
          {data?.title}
        </text>
        {/* <text className="Text-1 text-center" style={para}>
          {data?.desc}
        </text> */}{" "}
       
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={model}>
          <Modal.Title style={{ color: "rgb(188, 54, 76)" }}>
            {modalData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={model}>
          <p style={{color:'#222'}}>{modalData.desc}</p>
        </Modal.Body>
        <Modal.Footer style={model}>
          <Button
            onClick={handleCloseModal}
            style={{ backgroundColor: "rgb(188, 54, 76)", border: "none" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OfferCard;
