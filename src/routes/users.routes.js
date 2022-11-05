import { Router } from "express";
import UserController  from "../controllers/users.controller.js";
import { validatorHandler } from '../middlewares/validator.handler.js';

import { createUserSchema } from
'../schemas/user.schema.js';



const router = Router();

const user = new UserController();

router.get('/users', async (req, res, next) => {
  try {
    const users = await user.getUser();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
router.post('/users',
  validatorHandler(createUserSchema, 'body'), 
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await user.createUser(body);
      res.status(201).json(newUser);
      
    } catch (error) {
      next(error);
    }
  }
)

export default router;