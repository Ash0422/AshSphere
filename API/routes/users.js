 
const router = require('express').Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    res.send("users routes");
});
// get user by username
router.get('/:username', async (req, res) => {
    const username = req.params.username; // Use params to get the username
    console.log('Querying for username:', username);
    if (username) {
        try {
            const user = await User.findOne({ username: username });
            console.log('User found:', user);
            if (user) {
                const { password, ...others } = user._doc;
                res.status(200).json(others);
            } else {
                res.status(404).json('User not found');
            }
        } catch (err) {
            console.error('Error:', err);
            res.status(500).json(err);
        }
    } else {
        res.send('users routes');
    }
});
// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                return res.status(500).json(err);
            }
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true}); // to return the updated user document
            res.status(200).json(updatedUser);
        } catch(err) {
            return res.status(500).json(err);
        }

    } else {
        return res.status(403).json("You can update only if you are the user or an admin.");
    }
});
// delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only if you are the user or an admin.");
    }
});

 // get a user
// router.get('/:id', async (req, res) => {
//     const userId = req.query.userId;
//     const username = req.query.username;
//     try {
//         const user = userId 
//         ? await User.findById(userId) 
//         : await User.findOne({username:username});
        
//         const { password, ...others } = user._doc;
//         res.status(200).json(others);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// get a user
// router.get('/', async (req, res) => {
//     const username = req.query.username;
//     console.log('Querying for username:', username);
//     if (username) {
//         try {
//             const user = await User.findOne({ username: username });
//             console.log('User found:', user);
//             if (user) {
//                 const { password, ...others } = user._doc;
//                 res.status(200).json(others);
//             } else {
//                 res.status(404).json('User not found');
//             }
//         } catch (err) {
//             console.error('Error:', err);
//             res.status(500).json(err);
//         }
//     } else {
//         res.send('users routes');
//     }
// });






// follow a user
router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId }});
                await currentUser.updateOne({ $push: { following: req.params.id }});
                res.status(200).json('user has been followed');
            } else {
                res.status(403).json('you already follow this user');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('you cannot follow yourself');
    }
});

// unfollow a user
router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId }});
                await currentUser.updateOne({ $pull: { following: req.params.id }});
                res.status(200).json('user has been unfollowed');
            } else {
                res.status(403).json('you do not follow this user');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('you cannot unfollow yourself');
    }
});




module.exports = router;
