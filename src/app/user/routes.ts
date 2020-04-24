import express, { Request, Response, NextFunction } from "express";
import { loginCtrl, signupCtrl } from "./User.ctrl";
import { signupValidator, loginValidator } from "../validators/valdiate";
import { ERROR_MESSAGES } from "../constants/messages";

export const userRoutes = express();

userRoutes.post("/login", loginValidator, loginCtrl);
userRoutes.post("/signup", signupValidator, signupCtrl);

userRoutes.use(
  (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error.code == 11000 && error.name == "MongoError") {
      res.status(400).json({
        message: ERROR_MESSAGES.EMAIL_EXITS
      });
      return;
    }

    res.status(400).json({
      message: error.message
    });
  }
);
