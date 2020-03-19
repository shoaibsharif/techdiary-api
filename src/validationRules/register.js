const joi = require("@hapi/joi")

module.exports = joi.object({
  name: joi.string().required(),
  username: joi
    .string()
    .min(3)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  profilePhoto: joi.string().uri(),
  password: joi
    .string()
    .alphanum()
    .min(6)
    .max(50)
    .required()
})
