const express = require('express');
const crypto = require('crypto');
const app = express();
const nodemailer = require('nodemailer'); // Import Nodemailer
require('./Config');
const form = require('./Formm');
var instance = require('./Razorpay');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(5000);

// Nodemailer transporter setup (replace with your email service credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port:465,
  secure:true,
  logger:true,
  debug:true,
  secureConnection:false,
 
  auth: {
    user: 'khushi.singh89208@gmail.com',
    pass: 'bvpv ubum rkou yomj',
  },

  tls: {
    rejectUnauthorized: false,
  },
});

app.post('/Order', async (req, resp) => {
  try {
    const option = {
      amount: Number(req.body.amount * 100),
      currency: 'INR',
    };
    const order = await instance.orders.create(option);
    
    // Assuming 'req.body.mail' contains the client's email
    // const clientEmail = req.body.mail;
    
    // // Send a payment confirmation email to the client
    // sendPaymentConfirmationEmail(clientEmail);

    console.log(order);
    resp.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    resp.status(500).json({
      success: false,
      error: 'Error creating order',
    });
  }
});

// Function to send a payment confirmation email
// const sendPaymentConfirmationEmail = (clientEmail) => {
//   const mailOptions = {
//     from: 'chetanyajoshi9654@gmail.com',
//     to: clientEmail,
//     subject: 'Payment Confirmation',
//     text: 'Thank you for your payment. We appreciate your business!',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// };

app.get('/key', (req, resp) => {
  resp.json({ key: 'rzp_test_OmCfFJhnp3Fztn' });
});

app.post('/saveDataToDatabase', async (req, resp) => {
  try {
    const {
      name,
      mail,
      phone,
      street,
      add,
      pin,
      country,
      amount,
      adult,
      selectedDate,
      children,
    } = req.body;
    const formData = new form({
      name: name,
      mail: mail,
      phone: phone,
      street: street,
      add: add,
      pin: pin,
      country: country,
      amount: amount,
      adult: adult,
      selectedDate: selectedDate,
      children: children,
    });
   

    const savedFormData = await formData.save();
    console.log('Form data saved:', savedFormData);
    const clientEmail = req.body.mail;
    const sendPaymentConfirmationEmail = (clientEmail) => {
      const mailOptions = {
        from: 'khushi.singh89208@gmail.com',
        to: clientEmail,
        subject: 'Payment Confirmation',
        text: `Payment sucessfull Thankyou for your Registration!\n\nPayment Date: ${paymentDate}\nPayment Amount: ${paymentAmount}`,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    };
    sendPaymentConfirmationEmail(clientEmail);




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
