//when we need to accesss the bakcend we need to call it through a url
//so for the CRUD operation wee need to create 4 routes(urls)

const router = require("express").Router();
let Student = require("../models/student"); // need to import the model

//when it try to add the data with post http method
router.route("/add").post((req, res) => {
  //need to create variable for the modals atrributes
  const name = req.body.name;
  const age = Number(req.body.age); //convert to a number
  const gender = req.body.address;

  //creating an object for the Student modal
  const newStudent = new Student({
    name,
    age,
    gender,
  });

  //save the object to the database through the modal when
  //using newStudent.save() it can be success or unsuccess
  newStudent
    .save()
    .then(() => {
      res.json("Student Added"); //send this message to the frnot end as json format
    })
    .catch((err) => {
      console.log(err); //if the insertion fails this wil execute
    });
});

module.exports = router;
