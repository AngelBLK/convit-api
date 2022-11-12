import { JWT_SECRET } from '../config.js';

import { Router } from "express";
import {auth, jwtStrat} from "../utils/auth/index.js";
import { loginUserSchema } from '../schemas/loginAuth.schema.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import jwt from "jsonwebtoken";


const router = Router();

router.post('/login',
  validatorHandler(loginUserSchema, 'body'),
  auth.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const {clte_id_cliente, clte_nombre, clte_fecha_registro, clte_id_pais, clte_id_estado, clte_correo } = req.user;
      const payload = {
        sub: clte_id_cliente,
        email: clte_correo,
      }
      const token = jwt.sign(payload, JWT_SECRET);
      res.status(200).json({
        message: 'Usuario autorizado',
        status: true,
        user: {
          clte_id_cliente,
          clte_nombre,
          clte_fecha_registro,
          clte_id_pais,
          clte_id_estado,
          clte_correo,
          token
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
