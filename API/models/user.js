const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: "String",
        required: true,
        min: 4,
        max: 25,
        unique: true
    },
    email: {
        type: "String",
        required: true,
        max: 60,
        unique: true,
    },
    password: {
        type: "String",
        required: true,
        min: 10,
    },
    profilePicture: {
        type: "String",
        default: '',
    },
    coverPicture: {
        type: "String",
        default: '',
    },
    followers: {
        type: "Array",
        default: [],
    },
    following: {
        type: "Array",
        default: [],
    },
    isAdmin: {
        type: "Boolean",
        default: false,
    },
    desc: {
        type: "String",
        max: 50
    },
    city: {
        type: "String",
        max: 50
    },
    from: {
        type: "String",
        max: 50
    },
    relationship: {
        type: "Number",
        enum: [1, 2, 3, 4]
    },
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
