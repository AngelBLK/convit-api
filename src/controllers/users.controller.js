import { pool } from "../db.js";

export const getUsers = async ( req, res ) => {
  try {
    const [ result ] = await pool.query('SELECT * FROM usuario');
    res.send( result );
  } catch ( error ) {
    return res.status(500).json({
      message: 'Something was wrong',
    });
  }
}