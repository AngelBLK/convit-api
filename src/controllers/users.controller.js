import { pool } from "../db.js";

export const getUsers = async ( req, res, next ) => {
  try {
    const [ result ] = await pool.query('SELECT * FROM usuario');
    res.send( result );
  } catch ( error ) {
    next( error );
  }
}