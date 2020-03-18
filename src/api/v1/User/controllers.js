const User = require("./model")
const { compareSync } = require("bcryptjs")

module.exports.register = async (req, res) => {
  let { name, username, password, profilePhoto, email } = req.body

  let user = await User.create({
    name,
    username,
    password,
    profilePhoto,
    email
  })

  res.json(user)
}

module.exports.login = async (req, res) => {
  let { user, password } = req.body

  let fetchedUser = await User.findOne({
    $or: [{ username: user.toLowerCase() }, { email: user.toLowerCase() }]
  }).select("+password")

  // User not found
  if (!fetchedUser)
    return res.status(401).json({
      message: "Invalid credentials"
    })

  // match password
  const matched = compareSync(password, fetchedUser.password)

  if (!matched)
    return res.status(401).json({
      message: "Invalid credentials"
    })

  if (matched) {
    return res.json({
      message: "You have successfully loggedin",
      user: fetchedUser
    })
  }
}
