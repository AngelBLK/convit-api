import { JWT_SECRET } from '../config.js';
import {Strategy, ExtractJwt} from "passport-jwt";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}

export const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});