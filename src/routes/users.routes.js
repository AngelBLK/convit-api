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
    return res.json({
      message: "Petición correcta",
      status: true,
      users
    });
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
      return res.status(201).json({
        message: "Petición correcta",
        status: true,
        user: newUser
      });
      
    } catch (error) {
      next(error);
    }
  }
)

export default router;