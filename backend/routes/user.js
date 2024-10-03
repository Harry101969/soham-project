const express = require("express");
const router = express.Router();
const { signup, login,getUser } = require("../controllers/userController");

// Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/allusers", getUser);

module.exports = router;
