import passport from 'passport';
import { LocalStrategy } from './strategies/local.strategy.js'

export const auth = passport.use(LocalStrategy);