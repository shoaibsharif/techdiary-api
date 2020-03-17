const Route = require("express").Router()
const catchError = require("../../../utils/catchErrors")
const { register } = require("./controllers")

Route.post("/login", (req, res) => {
  res.json({
    msg: "/login"
  })
})

Route.post("/register", catchError(register))

module.exports = Route
