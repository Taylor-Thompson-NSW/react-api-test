//config dotenv
require("dotenv").config();

//Initialize express/mongoose
const express = require("express");
const mongoose = require("mongoose");

//create app variable for express
const app = express();

//listen on 3000 and log that the connection was successful
app.listen(1234, () => console.log("server started!"));

//connect to our mongodb users database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

//on error, and once open
db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("Connected to Database!");
});

//Allow app to receive JSON responses
app.use(express.json());

//initialize our usersRouter
const usersRouter = require("./routes/usersRouter");
//tell our app to use it
app.use('/users', usersRouter);
 
