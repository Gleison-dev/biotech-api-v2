import express from "express";
import { testConnection } from "./database/connection.js";
import { userRoute } from "./routes/user.route.js";
import { catalogRoute } from "./routes/catalog.route.js";
import { productionRoute } from "./routes/production.route.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(userRoute);
app.use(catalogRoute);
app.use(productionRoute);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando em http://localhost:${port}`)
});