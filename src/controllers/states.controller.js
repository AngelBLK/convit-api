import { pool } from "../db.js";
import boom from '@hapi/boom';

class StatesController {
  constructor() {}

  getStates = async () => {
    try {
      const [ result ] = await pool.query('SELECT * FROM estado;');
      return result;
    } catch ( error ) {
      throw boom.badImplementation('Server Error');
    }
  }   
}

export default StatesController;