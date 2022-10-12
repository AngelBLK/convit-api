import { pool } from "../db.js";

export const getClients = async ( req, res ) => {
  try{
    const [ result ]= await pool.query('Select * FROM cliente');
    res.send( result );
  } catch ( error ) {
    return res.status(500).json({ message: 'Something Goes Wrong'});
  }
}