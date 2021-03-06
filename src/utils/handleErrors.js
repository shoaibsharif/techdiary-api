const formatMongooseValidationError = require("./formatMongooseValidationErrors")

// const formatJoiError = errors => {
//   const errorObj = {}

//   errors.forEach(n => {
//     errorObj[n.path[0]] = n.message
//   })

//   return errorObj
// }

const handleErrors = (error, req, res, next) => {
  if (error.name == "ValidationError") {
    res.status(401).json(formatMongooseValidationError(error.errors))
  }

  console.log(JSON.stringify(error, undefined, 4))
}

module.exports = handleErrors
