import express from "express";
import { loginCtrl, signupCtrl } from "./User.ctrl";
import { signupValidator } from "../validators/valdiate";

export const userRoutes = express();

userRoutes.post("/login", loginCtrl);
userRoutes.post("/signup", signupValidator, signupCtrl);
