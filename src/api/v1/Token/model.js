const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
  sub: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Subscriber id is required"]
  },
  token: {
    type: String,
    required: [true, "Token is required"]
  },
  platform: {
    type: String
  }
})

module.exports = mongoose.model("Token", tokenSchema)
