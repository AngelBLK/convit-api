import { Strategy } from 'passport-local';
import UserController from '../../../controllers/users.controller.js';
import boom from '@hapi/boom';
import bcrypt  from 'bcrypt';

const userController = new UserController();

export const LocalStrategy = new Strategy( 
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  
  async (email, password,  done) => {
  try {
    const user = await userController.getUserByEmail(email);
    console.log(user.clte_pass);
    if (!user) {
      done(boom.unauthorized('Correo invalido'), false);
    }

    const isMatch = await bcrypt.compare(password, user.clte_pass);

    if(!isMatch) {
      done(boom.unauthorized('Contraseña invalida'), false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});