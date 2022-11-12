import express, { json } from "express";
import boom from '@hapi/boom';
import { serverErrorHandler, boomErrorHandler } from "./middlewares/error.handler.js";
import passport from "passport";

import { checkApiKey } from "./middlewares/auth.handler.js";

import users from "./routes/users.routes.js";
import countries from "./routes/countries.routes.js";
import states from "./routes/states.routes.js";
import login from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use("/api", checkApiKey, login);
app.use("/api", users);
app.use("/api", countries);
app.use("/api", states);



app.use((req, res, next) => {
  throw boom.notFound('Enpoint Not Found');
});

app.use(boomErrorHandler);
app.use(serverErrorHandler);


export default app;
