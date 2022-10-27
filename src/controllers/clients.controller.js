import { pool } from "../db.js";

export const getClients = async (req, res, next ) => {
  try{
    const [ result ]= await pool.query('Select * FROM cliente');
    res.send( result );
  } catch {
    throw boom.server('Server Error');
  }
}