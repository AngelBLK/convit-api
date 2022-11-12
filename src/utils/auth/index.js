import passport from 'passport';
import { LocalStrategy } from './strategies/local.strategy.js'
import { jwtStrategy } from './strategies/jwt.strategy.js'

export const jwtStrat = passport.use(jwtStrategy)
export const auth = passport.use(LocalStrategy);