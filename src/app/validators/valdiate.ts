import { Request, Response, NextFunction } from "express";
import { userSignupSchema, userLoginSchema } from "../schemas/user.schema";
import { Schema } from "@hapi/joi";

export const signupValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const error = valdiate(payload, userSignupSchema);

  if (error) {
    res.status(400).json({
      message: error,
      result: null
    });
    return;
  }

  next();
};

export const loginValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = { ...req.body };
  const error = valdiate(payload, userLoginSchema);

  if (error) {
    res.status(400).json({
      message: error,
      result: null
    });
    return;
  }

  next();
};

export const valdiate = (payload: any, schema: Schema) => {
  const { error } = schema.validate(payload);

  if (error) {
    return error.details[0].message.split('"').join("");
  }
  return null;
};
