"use strict";
import { express } from "express";
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

router.post("/login", authController.login);

module.exports = router;
