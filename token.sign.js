import jwt from "jsonwebtoken";

const secret = 'myNewToken';

const payload = {
  sub: 1,
  role: 'client'
}

const signToken = (payload, secret) => {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);

console.log(token);