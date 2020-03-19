const jwt = require("jsonwebtoken")

const isAuthenticated = async (req, res, next) => {
  //   next()

  if (!req.headers.authorization) {
    res.json({
      message: "json web token required"
    })
  } else {
    let decoded = await jwt.verify(
      req.headers.authorization.replace("Bearer ", ""),
      process.env.JWT_SECRET
    )

    if (!decoded)
      return res.json({
        message: "json web token required"
      })

    req.user = decoded
    next()
  }
}

module.exports = isAuthenticated
