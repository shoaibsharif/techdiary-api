const jwt = require("jsonwebtoken")
const Token = require("../api/v1/Token/model")

const isAuthenticated = async (req, res, next) => {
  //   next()

  if (!req.headers.authorization) {
    res.status(401).json({
      message: "json web token required"
    })
  } else {
    const token = req.headers.authorization.replace("Bearer ", "")
    let decoded = await jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded)
      return res.status(401).json({
        message: "json web token required"
      })

    let tokenFound = await Token.findOne({ token, sub: decoded._id })

    if (!tokenFound)
      return res.status(401).json({
        message: "Invalid or expired token"
      })

    req.user = decoded
    next()
  }
}

module.exports = isAuthenticated
