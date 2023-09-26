// const mongoose= require('mongoose')
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id:  String, 
  razorpay_signature: String, 
  name:  String,
  email:String,
  Town: String,
  Number: String, 
  quantities:Object,
  amount:Number
 
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
