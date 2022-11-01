import { pool } from "../db.js";
import boom from '@hapi/boom';

export const getUsers = async ( req, res, next ) => {
  try {
    const [ result ] = await pool.query('SELECT clte_id_cliente, clte_nombre, clte_telefono, clte_id_pais, clte_id_estado, clte_correo FROM cliente');
    res.send( result );
  } catch ( error ) {
    throw boom.badImplementation('Server Error');
  }
}

export const createUsers = (req, res, next) => {
  try {
    const name = req.body.name;
    const country = req.body.country;
    const state = req.body.state;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const password = req.body.password;
    //Country code from mexico: 139
    //State code frome CDMX: 2332
    // pool.query(`INSERT INTO cliente (clte_nombre, clte_id_pais, clte_id_estado, clte_correo, clte_telefono , clte_pass) VALUES (${name}, ${country}, ${state}, ${email}, ${phone_number}, ${password})`);

    const body = req.body;
    res.send( body );
  } catch (error) {

  }
}