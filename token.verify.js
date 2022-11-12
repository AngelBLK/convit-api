import jwt from "jsonwebtoken";

const secret = 'myNewToken';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NjgyMTM2Nzh9.QAIV0uvw2f3C8fyWjO6GnISOvOdTBP88PLLDPIPjjmc';

const verifyToken = (payload, secret) => {
  return jwt.verify(payload, secret);
}

const payload = verifyToken(token, secret);

console.log(payload);