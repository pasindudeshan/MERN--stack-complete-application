const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser  = require("body-parser");
require("dotenv").config(); //import .env file configuration to the project
const app = express();

//declaring the PORT
const PORT =  process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//from mongoose 6 these options are not needed
// mongoose.connect( URL , {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopologyL: true,
//     useFindAndModify: false
// });

mongoose.connect( URL, (err) => {
    if(err) throw new err;
});


const connection = mongoose.connection;
//once calls only one time and listen to open event
//if the connection to database success then open event trigger
connection.once("open", () => {
    console.log("MongoDb connection successful");
});

//starting the server
app.listen( PORT, () => {
    console.log(`Server is up and running on Port:${PORT}`);
});
