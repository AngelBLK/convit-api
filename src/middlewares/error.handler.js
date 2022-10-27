export const logErrors = (error, req, res, next) => {
  console.log(error);
  next(error);
};

export const serverErrorHandler = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stacck,
  });
  next(error);
};

export const boomErrorHandler = (error, req, res, next) => {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }
  next(error);
}