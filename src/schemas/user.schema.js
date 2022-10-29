import Joi from "joi";

const id = Joi.number().integer();
const email = Joi.string().email;
const password = Joi.string().min(8);

export const logInUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

export const updateUserSchema = Joi.object({
  email: email,
  password: password,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});