import express from "express";
import { login, logout } from "../controllers/auth.controller.js";

const authrouter = express.Router();

authrouter.post("/login", login);
authrouter.get("/logout", logout);

export default authrouter;