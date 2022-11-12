import { Router } from "express";
import {auth} from "../utils/auth/index.js";
import { loginUserSchema } from '../schemas/loginAuth.schema.js';
import { validatorHandler } from '../middlewares/validator.handler.js';

const router = Router();

router.post('/login',
  validatorHandler(loginUserSchema, 'body'),
  auth.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      res.status(200).json({
        message: 'Usuario autorizado',
        "status": true,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
