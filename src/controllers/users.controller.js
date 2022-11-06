import { pool } from "../db.js";
import boom from '@hapi/boom';
import bcrypt  from 'bcrypt';


class UserController {
  constructor() {}

  getUser = async () => {
    try {
      const [ result ] = await pool.query('SELECT clte_id_cliente, clte_nombre, clte_telefono, clte_id_pais, clte_id_estado, clte_correo FROM cliente');
      return result;
    } catch ( error ) {
      throw boom.badImplementation('Server Error');
    }
  }

  createUser = async (data) => {
    const { name,  email, password, phone_number, country, state} = data;
    const hash = await bcrypt.hash(password, 10);
    
    const [ rows ] = await pool.query('INSERT INTO cliente (clte_nombre, clte_correo, clte_pass, clte_telefono, clte_id_pais, clte_id_estado) VALUES ( ?, ?, ?, ?, ?, ? )', [`${name}`, `${email}`, `${hash}`, `${phone_number}`, country, state]);
    return rows;
  }

  getUserByEmail = async (email) => {
    try {
      const [result]  = await pool.query('SELECT * FROM cliente WHERE clte_correo=?', [`${email}`]);
      
      return result[0];
    } catch ( error ) {
      throw boom.badImplementation('Server Error');
    }
  }
}

export default UserController;
