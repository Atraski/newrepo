/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import './upcoming.css';


import bloger from './imagegallery/bloggers mela delhi templt2-01 (1).png';

export default function Upcoming() {
  const [values, setValues] = useState(1);

  const Decrement = () => {
    if (values > 1) {
      setValues(values - 1);
    }
  }

  const Increment = () => {
    setValues(values + 1);
  }


  return (

    <div className="heading">
      <h1 className="upcoming" style={{ fontSize: '40px' }}>Upcoming Events</h1>

      <div className="blogger_mela" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

        <div className="sections">
          <main role="main" >
            <div class="product" style={{ border: '3px solid yellow' }}>
              <figure>
                <img src={bloger} alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description" style={{ border: '1px solid grey', background: '#666666' }}>

                <div class="info">
                  <h1 style={{ color: '#fff', fontWeight: '500' }}>BLOGGER’S MELA (DELHI)</h1>
                  <p>

                  </p>
                </div>

                <div class="price">
                  ₹150.00
                </div>
              </div>

              <div class="product-sidebar">

                <div className="quantity">
                  <button onClick={Decrement} style={{ color: '#222', fontSize: '11px', fontWeight: '900', display: 'flex', justifyContent: 'center', alignContent: 'center' }}><i class="fa-sharp fa-solid fa-minus" style={{ marginTop: '10px' }}></i></button>

                  <div className="box" contentEditable="true" style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
                    {values}
                  </div>
                  <button onClick={Increment} style={{ color: '#222', fontSize: '17px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>+</button>

                </div>

              </div>
            </div>
          </main>



        </div>



        {/* <div className="sections">
          <main role="main">
            <div class="product" style={{ border: '3px solid yellow' }}>
              <figure>
                <img src={bloger} alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description" style={{ border: '1px solid grey', background: '#666666' }}>

                <div class="info">
                  <h1 style={{ color: '#fff', fontWeight: '500' }}>BLOGGER’S MELA (DELHI)</h1>
                  <p>

                  </p>
                </div>

                <div class="price">
                  ₹150.00
                </div>
              </div>

              <div class="product-sidebar">

                <div className="quantity">
                  <button onClick={Decrement} style={{ color: '#222', fontSize: '11px', fontWeight: '900', display: 'flex', justifyContent: 'center', alignContent: 'center' }}><i class="fa-sharp fa-solid fa-minus" style={{ marginTop: '10px' }}></i></button>

                  <div className="box" contentEditable="true" style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
                    {values}
                  </div>
                  <button onClick={Increment} style={{ color: '#222', fontSize: '17px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>+</button>

                </div>

              </div>
            </div>
          </main>



        </div> */}



        {/* <div className="sections">
          <main role="main">
            <div class="product" style={{ border: '3px solid yellow' }}>
              <figure>
                <img src={bloger} alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description" style={{ border: '1px solid grey', background: '#666666' }}>

                <div class="info">
                  <h1 style={{ color: '#fff', fontWeight: '500' }}>BLOGGER’S MELA (DELHI)</h1>
                  <p>

                  </p>
                </div>

                <div class="price">
                  ₹150.00
                </div>
              </div>

              <div class="product-sidebar">

                <div className="quantity">
                  <button onClick={Decrement} style={{ color: '#222', fontSize: '11px', fontWeight: '900', display: 'flex', justifyContent: 'center', alignContent: 'center' }}><i class="fa-sharp fa-solid fa-minus" style={{ marginTop: '10px' }}></i></button>

                  <div className="box" contentEditable="true" style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
                    {values}
                  </div>
                  <button onClick={Increment} style={{ color: '#222', fontSize: '17px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>+</button>

                </div>

              </div>
            </div>
          </main>



        </div> */}





      </div>

    </div>
  )
}
