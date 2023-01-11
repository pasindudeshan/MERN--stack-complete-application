//all the data com from routes are go to the database through the modals

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a schema which is like creating a table or creating an object like in java
const studentSchema = new Schema({
  //like defing columns of a table
  name: {
    type: String,
    required: true, //setting the restriction
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

//take two parameter document name and the schema
//when model goto the database document name become all simple and becomes plural form which means add 's' to the end of the name
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
