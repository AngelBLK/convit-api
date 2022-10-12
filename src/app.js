import express, { json } from 'express';
import clients from './routes/clients.routes.js';
const app = express();

app.use(express.json());
app.use('/api', clients);
app.use( (req, res, next) => {
  res.status(404).json({ message: 'endpoint not found'});
} );

export default app;