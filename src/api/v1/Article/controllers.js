module.exports.index = (req, res) => {
  res.json({
    message: "index"
  })
} // article list
module.exports.show = (req, res) => {
  res.json({
    message: "show"
  })
} // show a single article
module.exports.update = (req, res) => {
  res.json({
    message: "update"
  })
} // update a single article
module.exports.store = (req, res) => {
  res.json({
    message: "store"
  })
} // create a single article
module.exports.destroy = (req, res) => {
  res.json({
    message: "destroy"
  })
} // delete a single article
