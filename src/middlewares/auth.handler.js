import boom from '@hapi/boom';

export const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api'];
  if(apiKey === '123') {
    next();
  } else {
    next(boom.unauthorized());
  }
}