import express, { json } from "express";
import clients from "./routes/clients.routes.js";
import users from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/error.handler.js";
const app = express();

app.use(express.json());

app.use("/api", users);
app.use("/api", clients);

app.use(errorHandler);

export default app;
