const User = require("./model")

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
