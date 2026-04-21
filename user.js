const mongoose = require("mongoose");
const { Schema, model } = mongoose;



const addressSchema = new Schema({
  street: String,
  city: String,
  country: String,
});



const userSchema = new Schema({
  name: String,
  email: String,
  addresses: [addressSchema]   
});



const User = model("User1", userSchema);


module.exports = User;