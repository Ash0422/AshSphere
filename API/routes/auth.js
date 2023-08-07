// const router = require('express').Router();
// const User = require('../models/User');

// // Register
// router.post("/register", async (req, res) => {
//     const createUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
        
//     })
//     try{
//         const user = await createUser.save();
//         res.status(200).json(user);
//     }catch(err){
//         console.log(err);
//     }

// });

// module.exports = router;
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
router.post('/login', async (req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if (!user) {
            return res.status(404).json("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(401).json("wrong password");
        }

        // Add a success response here if the user is found and password is correct
        // For example: 
        res.status(200).json("Logged in successfully");
    } catch(err){
        console.log(err)
    }
   
});



module.exports = router;

