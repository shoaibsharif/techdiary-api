const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      minlength: [6, "Title should be atleast 6 characters long"]
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, "Slug mustbe unique"]
    },
    excerpt: {
      type: String,
      trim: true
    },
    body: {
      type: String,
      trim: true,
      required: [true, "Article body is required"],
      minlength: [120, "Article body should be atleast 120 characters long"]
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "author id is required"]
    }
  },
  { timestamps: true }
)

articleSchema.plugin(uniqueValidator, { message: "{PATH} must be unique." })

mongoose.model("Article", articleSchema)
