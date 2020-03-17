const formatValidationErrors = errors => {
  const errorObj = {}

  Object.keys(errors).forEach(key => {
    errorObj[key] = errors[key].message
  })

  return errorObj
}

const handleErrors = (error, req, res, next) => {
  if (error.name == "ValidationError") {
    res.json(formatValidationErrors(error.errors))
  }

  console.log(JSON.stringify(error, undefined, 4))
}

module.exports = handleErrors
