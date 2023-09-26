import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './Paymentform.css';
import { useNavigate } from "react-router-dom";
import './Cartview.css';
import'./Emptycart.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DEL, total } from './Actions/action1';
// import { keyframes } from 'styled-components';
import {useEffect } from 'react';
import  { quantities } from './Cartview';
import { useLocation } from "react-router-dom"; // Import useLocation






const PaymentForm = () => {
  const[name,setname]=useState(" ")
  const[email,setemail]=useState(" ")
  const[Town,settown]=useState(" ")
  const[Number,setno]=useState(" ")



const navigate= useNavigate()
  const cartItems = useSelector((state) => state.Cartreducer.carts);

  // Initialize state for item quantities
  const [quantities, setQuantities] = useState(() => {
    const savedQuantities = JSON.parse(localStorage.getItem('cartQuantities')) || {};
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = savedQuantities[item.id] || 1;
    });
    return initialQuantities;
  });
  console.log(quantities,'uiii')

  let CalculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const quantity = quantities[item.id] || 0; // Get the quantity for the item
      const subtotal = Math.round(quantity * item.price);
      total += subtotal;
    });
    return total;


  };
  const totalval= CalculateTotal();

  

  
// -----------------------------------------------------
const checkout=async(amount)=>{

    localStorage.setItem('amount', amount); // Set the 'amount' in localStorage\
try{
  if(Number.length === 10){
  var data1 = await fetch("http://localhost:8000/Order",{
    method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({amount,name, email, Town, Number })
  })
 
  var keys= await fetch("http://localhost:8000/key",{
    method: 'GET',

  })
  keys = await keys.json()
  console.log(keys,"yes")
  data1 = await data1.json()


  // const keys='rzp_test_OmCfFJhnp3Fztn'
  console.log(keys)
  console.log(data1.amount)
  console.log(data1.id)
  console.log(data1)
}
else{
  alert("Please Enter Valid Number")
}
  if (data1.success) {

  const  options = {
    key:keys.key, // Enter the Key ID generated from the Dashboard
    amount: data1.order.tot, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp", //your business name
    description: "Test Transaction",
    // image: "https://example.com/your_logo",
    order_id: data1.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:8000/verification",
    handler: function (response) {
      // Handle the payment success callback here
      console.log("Payment successful: ", response);
      try {
        navigate('/');
      } catch (error) {
        console.error('Navigation error:', error);
      }
      // You can navigate to a success page or perform further actions here

      // Save data to the database (you need to implement this on your backend)
      saveDataToDatabase();
    },
    prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000" //Provide the customer's phone number for better conversion rates 
    },

    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#3399cc"
    }
};
const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.success", function (response) {
          // Payment was successful, now save data to the database
          saveDataToDatabase();
          console.log("Payment successful: ", response);
          // You can navigate to a success page or perform further actions here
        });

        rzp1.open();
      } else {
        console.error("Error creating Razorpay order:", data1.error);
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };
  

  const saveDataToDatabase = async () => {
    
    try {
      const paisa = localStorage.getItem('amount')

      // Send a request to your server to save data to the database
      const response = await fetch("http://localhost:5000/saveDataToDatabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, Town, Number, amount:paisa ,quantities}),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Data saved successfully:", data);
        // You can show a success message to the user
      } else {
        console.error("Error saving data:", data.error);
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error saving data:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

 

//     let data= await fetch("http://localhost:5000/formdata",{
//       method:'post',
//       body:JSON.stringify({name,email,Town,Number}),
//       headers:{
//         'Content-Type':'application/json',
//       }

//     })
//     data= await data.json()

//     if(Number.length !=10){
//   alert('enter correct vakue')

//     }
//     else{
// console.log(data);
// alert("done")
// if (keyy) {
//   console.log('enter inti ');
//   let data= await fetch("http://localhost:5000/formdata",{
//           method:'post',
//           body:JSON.stringify({name,email,Town,Number}),
//           headers:{
//             'Content-Type':'application/json',
//           }
    
//         })
//         data= await data.json()
    
//         if(data.Number.length !=10){
//       alert('enter correct vakue')
    
//         }
//         else{
//     console.log(data);
//     alert("done")













//   };

 
// }

// const handleSubmit = async (e) => {

//   e.preventDefault();
//     // Combine the form data and Razorpay response
//     const formData = {
//       name :name,
//       email :email,
//       Town :Town,
//       Number:Number,
//       quantity: quantities,
//       aamount: totalval,
     
//     };
  
//     // Send both sets of data to the server for saving
//       const response = await fetch('http://localhost:5000/verification', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name,Town,Number,quantity:quantities,aamount:totalval}),
//       });
  

      
//       const data = await response.json();
  
//       if (data.success) {
//         console.log('Data saved successfully:', data.data);
//       } else {
//         console.error('Error saving data:', data.error);
//       }
   
 
// }

  return (
    <div className="bg-black mm">
    <div style={{backgroundColor:'#eee'}}>
    <Container className="py-5" style={{ width: "70vh"  }}>
      <h3 className="mb-3 text-black">Book a Hotel Room</h3>
      <Row>
        
        <Form onSubmit={(e) => { e.preventDefault(); checkout(totalval); }}>
          

        <Form.Group controlId="name">
          <Form.Label className="text-black">Name</Form.Label>
          <Form.Control
          style={{border:'1px solid black'}}
            type="text"
            name="name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            placeholder="Enter your name"
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="text-black">Email address</Form.Label>
          <Form.Control
          style={{border:'1px solid black'}}
            type="email"
            name="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            placeholder="Enter email"
            className="mb-3"
            required
          />
        </Form.Group>

        
            <Form.Group controlId="checkIn">
              <Form.Label className="text-black">Town/City</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="checkIn"
                value={Town}
                onChange={(e)=>{settown(e.target.value)}}
                className="mb-3"
                required
              />
            </Form.Group>
        
          
        
            <Form.Group controlId="checkOut">
              <Form.Label className="text-black">Mobile(whatsapp)</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="checkOut"
                value={Number}
                onChange={(e)=>{setno(e.target.value)}}
                className="mb-3"
               
                required
              />
            </Form.Group>
{/* 
        <Form.Group controlId="guests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            as="select"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
          </Form.Control>
        </Form.Group> */}

        {/* <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Optional: Leave a message for the hotel"
          />
        </Form.Group> */}

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>

        
      </Row>
          </Container>
          </div>
          </div>
                            // type="button" style={{ width:"auto"}}  onClick={()=>{checkout(totalval)}}


  );
};

export default PaymentForm;
