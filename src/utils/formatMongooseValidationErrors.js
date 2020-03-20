const formatValidationErrors = errors => {
  const errorObj = {}

  Object.keys(errors).forEach(key => {
    errorObj[key] = errors[key].message
  })

  return errorObj
}

module.exports = formatValidationErrors
