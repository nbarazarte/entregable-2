const userRouter = require('./user.router') // la importamos
const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", userRouter); // la ejecutamos

module.exports = router;