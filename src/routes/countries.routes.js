import { Router } from "express";
import CountriesController from "../controllers/countries.controller.js"

const router = Router();

const countries = new CountriesController();


router.get('/countries', async (req, res, next) => {
  try {
    const countriesList = await countries.getCountries();
    return res.json({
      message: "Petición correcta",
      status: true,
      countriesList
    });
  } catch (error) {
    console.log("Aqui");
    next(error);
  }
});

export default router;