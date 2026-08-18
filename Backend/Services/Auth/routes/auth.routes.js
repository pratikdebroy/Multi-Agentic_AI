import express from "express";
import { login } from "../controllers/auth.controller.js";

const authrouter = express.Router();

authrouter.post("/login", login);

export default authrouter;