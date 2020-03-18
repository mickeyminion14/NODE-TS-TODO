import Joi from "@hapi/joi";

export const userSignupSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(25)
    .required(),
  age: Joi.number().max(100),
  email: Joi.string().email(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(25)
});

export const userLoginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(25)
});
