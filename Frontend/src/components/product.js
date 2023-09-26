/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Product(props) {
  return (
    <div className="card" data-aos="flip-right" data-aos-duration="3000">
      <img
        className="product--image overlay"
        src={props.url}
        alt="product image"
      />
      <div className="middle">
        <div className="text">{props.name}</div>
      </div>
      {/* <h2 >{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p> */}
    </div>
  );
}
