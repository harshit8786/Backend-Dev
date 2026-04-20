import express from "express";
import createUser from "../controllers/createUser.js";
import loginUser from "../controllers/loginUser.js";
import logoutUser from "../controllers/logoutUser.js";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("register");
});

router.post("/signup", createUser);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", loginUser);

router.get("/logout", logoutUser);

export default router;
