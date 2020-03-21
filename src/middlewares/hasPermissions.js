const hasPermissions = permissionNeeded =>
  function(req, res, next) {
    let matchedPermissions = true;
    let permissionsTheyHave = req.user.permissions;
    for (let i = 0; i < permissionNeeded.length; i++) {
      if (!permissionsTheyHave.includes(permissionNeeded[i]))
        matchedPermissions = false;
    }

    if (matchedPermissions) next();
    else {
      res.status(403).json({ message: "Insufficient permission" });
    }
  };

module.exports = hasPermissions;
