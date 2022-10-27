import express, { json } from "express";
import boom from '@hapi/boom';

import users from "./routes/users.routes.js";
import { serverErrorHandler, boomErrorHandler } from "./middlewares/error.handler.js";
import { checkApiKey } from "./middlewares/auth.handler.js";
const app = express();

app.use(express.json());


app.use("/api", checkApiKey, users);

app.use((req, res, next) => {
  throw boom.notFound('Enpoint Not Found');
});

app.use(boomErrorHandler);
app.use(serverErrorHandler);


export default app;
