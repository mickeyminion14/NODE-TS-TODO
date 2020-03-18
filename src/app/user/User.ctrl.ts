import { Request, Response } from "express";
import { signup, login } from "./db";
import { ERROR_MESSAGES } from "../constants/messages";

export const loginCtrl = async (req: Request, res: Response) => {
  const payload = { ...req.body };

  try {
    const token = await login(payload);
    console.log(token);

    if (token) {
      res.json({
        message: "Login Successfull !",
        result: null,
        token: token
      });
    } else {
      throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);
    }
    // login code
  } catch (e) {
    console.error(e);
    res.status(400).json({
      message: e.message,
      result: null
    });
  }
};

export const signupCtrl = async (req: Request, res: Response) => {
  const payload = { ...req.body };

  try {
    const document = await signup(payload);
    if (document) {
      res.status(200).json({
        message: "Signup Successfull",
        result: null
      });
      return;
    }
  } catch (e) {
    res.status(400).json({
      message: "Email Already Exists !",
      result: null
    });
  }
};
