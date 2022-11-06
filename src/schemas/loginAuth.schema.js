import Joi from "joi";

const email = Joi.string().email();
const password = Joi.string().min(8);

export const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});