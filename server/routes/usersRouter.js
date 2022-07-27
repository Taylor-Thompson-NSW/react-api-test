const express = require("express");
const router = express.Router();

//import users Schema
const User = require("../models/usersModel");

//Routes

//Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  //res.send('Hello World!')
});

//Get One User
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

//Creating one user
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    //try to save the user, and return the response as json
    user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating a user
router.patch("/:id", getUser, async (req, res) => {
  //set the request data to the new response data
  if (req.body.name !== null) {
    res.user.name = req.body.name;
  }
  if (req.body.age !== null) {
    res.user.age = req.body.age;
  }
  //tries to go and save our new data the user we found by ID
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    //if not then log status code 400 & respond with the err message
    res.status(400).json({ message: err.message });
  }
});

//Deleting a user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted a user!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Middleware to find the user by ID
async function getUser(req, res, next) {
  let user;
  try {
    //finds userByID if it can and sets the user as well if it can
    user = await User.findById(req.params.id);
    //if not then return 404
    if (user == null) {
      return res.status(404).json({ message: "Cannot Find User" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  //sets the user in the call to the user we findByID here
  res.user = user;
  next();
}

module.exports = router;
