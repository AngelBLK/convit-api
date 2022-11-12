import { pool } from "../db.js";
import boom from '@hapi/boom';

class CountriesController {
  constructor() {}

  getCountries = async () => {
    try {
      const [ result ] = await pool.query('SELECT * FROM pais;');
      return result;
    } catch ( error ) {
      throw boom.badImplementation('Server Error');
    }
  }   
}

export default CountriesController;