const router = require("express").Router();

const colorController = require("../controllers/colorController");

router.route("/colors").post((req, res) => colorController.create(req, res));

router.route("/colors").get((req, res) => colorController.getAll(req, res));

router.route("/colors/:id").get((req, res) => colorController.get(req, res));

router
  .route("/colors/:id")
  .delete((req, res) => colorController.delete(req, res));

router.route("/colors/:id").put((req, res) => colorController.update(req, res));

module.exports = router;
