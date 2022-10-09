import express, { json } from 'express';

const app = express();

app.use( (req, res, next) => {
  res.status(404).json({ message: 'endpoint not found'});
} );

export default app;