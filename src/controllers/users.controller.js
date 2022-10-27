import { pool } from "../db.js";
import boom from '@hapi/boom';

export const getUsers = async ( req, res, next ) => {
  try {
    const [ result ] = await pool.query('SELECT * FROM cliente');
    res.send( result );
  } catch ( error ) {
    throw boom.badImplementation('Server Error');
  }
}