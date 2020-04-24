import UserModel from "./User.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token";

export const signup = (payload: any) => {
  const hashedPassword = bcrypt.hashSync(payload.password, 1);
  payload.password = hashedPassword;
  const user = new UserModel(payload);
  return user.save();
};

export const login = async (payload: any) => {
  const userDoc: any = await UserModel.findOne({ email: payload.email });

  if (!(userDoc && bcrypt.compareSync(payload.password, userDoc.password))) {
    return null;
  }
  return generateToken(payload);
};
