import { Router } from "express";
import StatesController from "../controllers/states.controller.js"

const router = Router();

const states = new StatesController();


router.get('/states', async (req, res, next) => {
  try {
    const statesList = await states.getStates();
    return res.json({
      message: "Petición correcta",
      status: true,
      statesList
    });
  } catch (error) {

    next(error);
  }
});

export default router;