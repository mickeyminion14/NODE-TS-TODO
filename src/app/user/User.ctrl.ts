import { Request, Response, NextFunction } from "express";
import { signup, login } from "./db";
import { ERROR_MESSAGES } from "../constants/messages";

export const loginCtrl = (req: Request, res: Response, next: NextFunction) => {
  const payload = { ...req.body };
  login(payload)
    .then(token => {
      if (!token) {
        return next(new Error(ERROR_MESSAGES.USER_NOT_FOUND));
      }
      res.json({
        message: "Login Successfull !",
        result: null,
        token: token
      });
    })
    .catch(next);
};

export const signupCtrl = (req: Request, res: Response, next: NextFunction) => {
  const payload = { ...req.body };

  signup(payload)
    .then(document => {
      if (!document) {
        return next(new Error(ERROR_MESSAGES.USER_NOT_FOUND));
      }
      res.status(200).json({
        message: "Signup Successfull",
        result: null
      });
    })
    .catch(next);
};
