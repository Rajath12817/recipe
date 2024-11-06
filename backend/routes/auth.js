const express = require('express')
const router = express.Router()
const User =  require('../models/User')
const {body, validationResult}
 = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')


const JWT_SECRET = "rajath is a good boy"


//Route 1 : create a user using: POST "/api/auth/createuser"  Doesn't require auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 4 })
], async (req, res) => {
    // Check if there are any validation errors
    const result = validationResult(req);
    let success=false;
    if (!result.isEmpty()) {
        // If errors are present, return a bad request with error details
        return res.status(400).json({success, errors: result.array() });
    }
    

    try {
        // Check if a user with the given email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, Error: "Email already exists" });
        }

        // Generate a salt and hash the user's password
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        });

        // Prepare JWT payload
        const data = {
            user: {
                id: user.id
            }
        };

        // Create and send the JWT token
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true
        res.json({success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});


//Route 2 : Login a user using: POST "/api/auth/login"  Doesn't require auth

router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').isLength({ min: 4 })
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }


    let success = false; 
    const { email, password } = req.body; // Extract email and password from req.body

    try {
        // Find the user with the given email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({success, error: "Invalid email or password, please try again" });
        }

        // Compare the entered password with the hashed password stored in the database
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success,error: "Invalid email or password, please try again" });
        }

        // Create and send JWT
        const payload = {
            user: {
                id: user.id
            }
        };
        const authtoken = jwt.sign(payload, JWT_SECRET);
        success =true;
        res.json({success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});


// Route 3 :  get user Detail of a user using: POST "/api/auth/getuser"  login required

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id; // Extract user ID from the request
        const user = await User.findById(userId).select("-password"); // Use findById to fetch the user by ID without password
        if (!user) {
            return res.status(404).json({ error: "User not found" }); // Return 404 if user doesn't exist
        }
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

module.exports = router;

