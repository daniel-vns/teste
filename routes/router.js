const router = require("express").Router();

const servicesRouter = require("./services");

router.use("/", servicesRouter);

const partyRouter = require("./parties");

router.use("/", partyRouter);

const colorRouter = require("./colors");

router.use("/", colorRouter);

const personRouter = require("./people");

router.use("/", personRouter);

module.exports = router;
