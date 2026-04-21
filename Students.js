const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: String,
  className: String
});


module.exports = mongoose.model("Student", studentSchema);