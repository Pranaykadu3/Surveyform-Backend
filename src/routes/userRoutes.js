const express = require("express");
const { registerUser, signInUser } = require("../controllers/userController");
const router = express.Router();
router.post("/signin", signInUser);
router.post("/register", registerUser);
module.exports = router;
