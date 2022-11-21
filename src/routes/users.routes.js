import { Router } from "express";
import passport from "passport";
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

router.get('/users/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const userById = await user.getUserById(id);

      return res.json({
        message: "Petición correcta",
        status: true,
        userById
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