/* eslint-disable no-unused-vars */
import React from 'react';
import "./M.css";
import model1 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import model2 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import model3 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import model4 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import model5 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import model6 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import model7 from './imagegallery/322749974_603548428445666_2133774729650885328_n.jpg';
import { Carousel } from 'react-bootstrap';

const M = () => {
    
  return (
    <div className="container ">
      <h1 className="Heading-1 text-center py-3 my-3">OUR MODELS</h1>
      <Carousel>
        <Carousel.Item >  
          <div className="d-flex justify-content-center shadow">
            <div className='m-2'>
              <img className="w-30 w-sm-10" src={model1} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model2} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model3} alt="First slide" />
            </div>

            
          </div>
        </Carousel.Item>
        <Carousel.Item>  
          <div className="d-flex justify-content-center">
            <div className='m-2'>
              <img className="w-30 w-sm-10" src={model3} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model4} alt="First slide" />
            </div>
            <div className='m-2'>
              <img className="w-30" src={model5} alt="First slide" />
            </div>

            
          </div>
        </Carousel.Item>
   

        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
    </div>
  );
}

export default M
