const router = require("express").Router();
const userRoutes = require("./userRoutes");
const mtnRoutes = require("./mtnRoutes");

router.use("/users", userRoutes);
router.use("/mountains", mtnRoutes);

module.exports = router;
