
const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    try {
        // Check if user already exists
        const oldUser = await User.findOne({ email: req.body.email });
        if (oldUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save user and respond
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login 
// 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(401).json({ error: "Wrong password" });
        }

        // Send the user information upon successful login
        res.status(200).json({
            message: "Logged in successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePicture: user.profilePicture,
                coverPicture: user.coverPicture,
                followers: user.followers,
                following: user.following,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                city: user.city,
                desc: user.desc,
                from: user.from,
                relationship: user.relationship,
                // Add any other user properties you want to send
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;

