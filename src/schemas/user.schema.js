import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const country = Joi.number().integer();
const state = Joi.number().integer();
const email = Joi.string().email;
const phone_number = Joi.string();
const password = Joi.string().min(8);

export const logInUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

export const createUserSchema = Joi.object({
  name: name.required(),
  country: country.required(),
  state: state.required(),
  email: email.required(),
  password: password.required(),
});


export const updateUserSchema = Joi.object({
  name: name,
  country: country,
  state: state,
  email: email,
  password: password,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
