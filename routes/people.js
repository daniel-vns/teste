const router = require("express").Router();

const personController = require("../controllers/personController");

router.route("/people").post((req, res) => personController.create(req, res));

router.route("/people").get((req, res) => personController.getAll(req, res));

router.route("/people/:id").get((req, res) => personController.get(req, res));

router
  .route("/people/:id")
  .delete((req, res) => personController.delete(req, res));

router
  .route("/people/:id")
  .put((req, res) => personController.update(req, res));

module.exports = router;
