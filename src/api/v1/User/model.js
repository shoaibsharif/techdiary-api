const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name should be atleast 3 characters long"]
  },
  username: {
    type: String,
    lowercase: true,
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username should be atleast 3 characters long"],
    unique: [true, "Username is already taken"]
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Email is required"],
    minlength: [3, "Username should be atleast 3 characters long"],
    unique: [true, "Email is already taken"]
  },
  profilePhoto: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password should be atleast 6 characters long"],
    maxlength: [50, "Password can be atmost 50 characters long"]
  }
})

UserSchema.plugin(uniqueValidator, { message: "{PATH} to be unique." })

module.exports = mongoose.model("User", UserSchema)
