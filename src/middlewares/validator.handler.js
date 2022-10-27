import boom from '@hapi/boom';

export const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    // property nos permite acceder a la propiedad dependiendo de donde se encuentr por ejemplo en un get viene de body, en post de params, etc.
    const data = req[property];
    const { error } = schema.validate(data);
    if( error ) {
      next(boom.badRequest(error));
    }
    next();
  }
}