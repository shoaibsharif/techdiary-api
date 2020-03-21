const Router = require("express").Router();
const { index, show, update, destroy, store } = require("./controllers");

const isAuthenticated = require("../../../middlewares/isAuthenticated");
const hasPermissions = require("../../../middlewares/hasPermissions");

Router.get("/", index);
Router.get("/:slug", show);

Router.put("/:slug", update);
Router.post(
  "/",
  isAuthenticated,
  hasPermissions(["CREATE_ARTICLE", "UPDATE_ARTICLE"]),
  store
);
Router.delete("/:slug", destroy);

module.exports = Router;
