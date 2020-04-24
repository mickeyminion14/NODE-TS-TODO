import jwt from "jsonwebtoken";

export const generateToken = (payload: any) => {
  return jwt.sign(payload, "sarthak", { expiresIn: "6h" });
};
