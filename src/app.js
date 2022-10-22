import express, { json } from "express";
import clients from "./routes/clients.routes.js";
import users from "./routes/users.routes.js";
import { serverErrorHandler } from "./middlewares/error.handler.js";
import { checkApiKey } from "./middlewares/auth.handler.js";
const app = express();

app.use(express.json());

app.use("/api", checkApiKey, users);
app.use("/api", clients);

app.use(serverErrorHandler);

export default app;
