const hasPermissions = permissionNeeded => {
  return function(req, res, next) {
    let userPermissions = req.user.permissions

    const isAllowed = role => permissionNeeded.indexOf(role) > -1

    res.send(matchedPermissions)

    if (req.user && isAllowed(userPermissions)) next()
    else {
      response.status(403).json({ message: "Insufficient permission" })
    }
  }
}

module.exports = hasPermissions
