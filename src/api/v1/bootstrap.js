const Router = require("express").Router()

Router.use("/users", require("./User/routes"))

module.exports = Router
