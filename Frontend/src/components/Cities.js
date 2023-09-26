

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product";
import cityImage from './images/indiaMaps.png';
import './cities.css';

import { productData, responsive } from "./data";

export default function Cities() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="container-fluid py-5 my-5 d-flex justify-content-center align-items-center flex-column bg-white">
            <h1 className="text-center" style={{color:'#fc0c8c' , fontWeight:'bold'}}>Cities Associated with</h1>

      <img src={cityImage} className="mt-5 map" style={{borderRadius:'15px' , height:'450px' , width:'430px'}}></img>
    </div>
  );
}






