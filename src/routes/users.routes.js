import { Router } from "express";
import { getUsers } from "../controllers/users.controller.js";
import { validatorHandler } from '../middlewares/validator.handler.js';

import { createUserSchema } from
'../schemas/user.schema.js';


const router = Router();

router.get('/users', getUsers);
router.post('/users',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(body)
    } catch (error) {
      res.json(error);
    }
  }

)

export default router;