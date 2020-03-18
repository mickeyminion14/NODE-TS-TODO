import UserModel from "./User.model";
import bcrypt from "bcrypt";
import { ERROR_MESSAGES } from "../constants/messages";
import { generateToken } from "../utils/token";

export const signup = (payload: any) => {
  const hashedPassword = bcrypt.hashSync(payload.password, 1);
  payload.password = hashedPassword;
  const user = new UserModel(payload);
  return user.save();
};

export const login = async (payload: any) => {
  //already verified payload

  // find user
  const userDoc: any = await UserModel.findOne({ email: payload.email });

  if (userDoc) {
    const hashedPassword = userDoc.password;
    const matchPassword = bcrypt.compareSync(payload.password, hashedPassword);
    if (matchPassword) {
      const token = generateToken(payload);

      return token;
    }
    return null;
  } else {
    return null;
  }

  // compare password using bcrypt

  //
};
