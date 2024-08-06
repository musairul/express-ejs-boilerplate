// controllers/indexController.js
exports.getIndex = (req, res) => {
  res.render("pages/index", { title: "Home" });
};
