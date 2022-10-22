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
