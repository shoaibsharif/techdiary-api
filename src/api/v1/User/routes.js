const Route = require("express").Router()
const catchError = require("../../../utils/catchErrors")
const { register, login } = require("./controllers")

Route.post("/login", catchError(login))

Route.post("/register", catchError(register))

module.exports = Route
