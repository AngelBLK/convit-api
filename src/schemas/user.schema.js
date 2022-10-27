import Joi from "joi";

const email = Joi.string();
const password = Joi.string();

export const logInUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});