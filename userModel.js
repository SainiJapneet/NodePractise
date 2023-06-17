const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
    required: [true, "Please, Enter an Email"],
    unique: [true,"Email already exist"]
    }, password: {
        type: String,
        required: [true,"PLease enter a password"],
        unique: false
    }, name: {
        type: String,
        required: [true,"PLease enter your name"],
        unique: false
    }, phoneNumber: {
        type: String,
        required: [true,"PLease enter a phone number"],
        unique: [true,"This number is already in use."]
    }

});
module.exports = mongoose.model.Users || mongoose.model("Users",UserSchema);
