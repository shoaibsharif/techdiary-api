// joi custom error message
const jwt = require("jsonwebtoken")

const user = {
  _id: 1,
  name: "Rayhan"
}

const secret = "myjwtsecret"

// console.log(jwt.sign(user, secret))

console.log(
  jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsIm5hbWUiOiJSYXloYW4iLCJpYXQiOjE1ODQ2MjkwNjl9.wjvrJU4Oj6xXwHnLBXVroD_dIb3JUshNV15pbZZFzZU",
    secret
  )
)
