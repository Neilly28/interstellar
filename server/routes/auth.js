import express from "express";
import { register } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";

const router = express.Router();

// register new user
router.post("/register", register);

// login user
router.post("/login", login);

export default router;
