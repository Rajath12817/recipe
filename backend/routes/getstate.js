const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const State =  require("../models/States");

// const { body, validationResult } = require("express-validator");
// const { trusted } = require("mongoose");

//Route 1 : get all notes : POST "/api/auth/fetchallnotes"   require auth
router.get("/getstate", async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router