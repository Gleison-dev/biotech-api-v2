import express from "express";
import { testConnection } from "./database/connection.js";
import { userRoute } from "./routes/user.route.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando em http://localhost:${port}`)
})