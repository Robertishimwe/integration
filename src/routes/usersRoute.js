// const userController = require("../controller/usersController")
// const verify = require("../middleware/authenticator")
// const express = require("express");

import express from "express";
import UserController from "../controller/usersController";
import verify from "../middleware/authenticator"
const router = express.Router();

router.post("/user/register", UserController.createUser)
router.get("/user",verify,UserController.findAllUsers)
router.post("/user/login",UserController.login)

module.exports = router;