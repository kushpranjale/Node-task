// creating schema for employee

const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Employee", EmployeeSchema);
