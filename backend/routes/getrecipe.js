const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Recipe = require("../models/Recipe")

//Route 1 : get all notes : POST "/api/auth/getstate"   require auth
router.get("/getrecipe", async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.json(recipe);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router