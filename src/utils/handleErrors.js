const formatValidationErrors = errors => {
  const errorObj = {}

  Object.keys(errors).forEach(key => {
    errorObj[key] = errors[key].message
  })

  return errorObj
}

const formatJoiError = errors => {
  const errorObj = {}

  errors.forEach(n => {
    errorObj[n.path[0]] = n.message
  })

  return errorObj
}

const handleErrors = (error, req, res, next) => {
  if (error.name == "ValidationError") {
    res.json(formatJoiError(error.details))
  }

  console.log(JSON.stringify(error, undefined, 4))
}

module.exports = handleErrors
