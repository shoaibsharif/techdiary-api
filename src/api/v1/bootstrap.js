const Router = require("express").Router()

Router.use("/users", require("./User/routes"))
Router.use("/articles", require("./Article/routes"))

module.exports = Router
