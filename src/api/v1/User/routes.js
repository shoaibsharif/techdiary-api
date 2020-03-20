const Route = require("express").Router()
const {
  register,
  login,
  logout,
  mySessions,
  removeSession,
  removeSessions
} = require("./controllers")
const isAuthenticated = require("../../../middlewares/isAuthenticated")

Route.post("/login", login)
Route.post("/register", register)
Route.post("/logout", isAuthenticated, logout)
Route.post("/sessions", isAuthenticated, mySessions)
Route.post("/remove-session/:sessionId", isAuthenticated, removeSession)
Route.post("/remove-sessions", isAuthenticated, removeSessions)

module.exports = Route
