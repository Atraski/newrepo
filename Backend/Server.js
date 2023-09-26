const express = require('express');
require('dotenv').config({ path: './.env' });
const crypto = require('crypto');
const app = express();
// require('dotenv').config({ path: './config.env' });
require('./Config');
const form = require('./FormData');
var instance = require('./Razorpay');
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT);



app.post('/Order', async (req, resp) => {
  const option = {
    amount: Number(req.body.amount * 100),
    currency: 'INR',
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});

app.get('/key', (req, resp) => {
  resp.json({ key: instance.key_id });
});

// app.post('/verification', async (req, resp) => {
//   try {
//     // Log the received data
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       name,
//       email,
//       Town,
//       Number,
//       quantity,
//       aamount
//     } = req.body;
 
//     console.log('Received form data:', req.body);






//   const body = razorpay_order_id + '|' + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac('sha256', 'wyTuLIkM1pDzjPnYg9E3NV6E')
//     .update(body.toString())
//     .digest('hex');
   

//     if (expectedSignature === razorpay_signature) {
      
  
//       // Combine the form data and Razorpay response
//       const formData = new form({
//         name: name,
//         email: email,
//         Town: Town,
//         Number: Number,
//         quantity: quantity,
//         aamount: aamount,
//         razorpay_order_id: razorpay_order_id,
//         razorpay_signature: razorpay_signature,
//         razorpay_payment_id: razorpay_payment_id
//         // Add any other form fields here
//       });

//       // Save the form data to the database
//       const savedFormData = await formData.save();
//       console.log('Form data saved:', savedFormData);

//       resp.status(200).json({
//         success: true,
//         data: savedFormData,
//       });

//       // After saving the form data, you can initiate the payment here
//       // checkout(totalval);

//       // Redirect to your frontend page
//       // resp.redirect('http://localhost:3000/');
//     } else {
//       resp.status(400).json({
//         success: false,
//         error: 'Signature mismatch',
//       });
//     }
//   } catch (error) {
//     console.error('Error handling form data:', error);
//     resp.status(500).json({
//       success: false,
//       error: 'Error handling form data',
//     });
//   }
// });
app.post('/saveDataToDatabase', async (req, resp) => {
  try {
    // Save the form data to the database
    // The data sent from the frontend
    const  {
 
         name,
       email,
      Town,
     Number,
     quantities,
          amount
        } = req.body;
     const  formData = new form({
                  name: name,
                  email: email,
                  Town: Town,
                  Number: Number,
                  quantities: quantities,
                  amount: amount,
                
                });
          
                // Save the form data to the database
                const savedFormData = await formData.save();
                console.log('Form data saved:', savedFormData);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: 'Data saved successfully',
    });

  } catch (error) {
    console.error('Error saving data:', error);
    resp.status(500).json({
      success: false,
      error: 'Error saving data',
    });
  }
});





