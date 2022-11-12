import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const country = Joi.number().integer();
const state = Joi.number().integer();
const email = Joi.string().email();
const phone_number = Joi.string().min(10).max(10);
const password = Joi.string().min(8);

export const createUserSchema = Joi.object({
  name: name.required(),
  country: country.required(),
  state: state.required(),
  email: email.required(),
  phone_number: phone_number.required(),
  password: password.required(),
});


export const updateUserSchema = Joi.object({
  name: name,
  country: country,
  state: state,
  email: email,
  phone_number: phone_number,
  password: password,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
