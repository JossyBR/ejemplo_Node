const express = require('express');

const router = express.Router();

const userRouter = require("./src/routes/user.routes");

router.use("/users", userRouter)

module.exports = router