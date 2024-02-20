import { Router } from "express";
import { 
    createProduction,
    getAllProductions,
    getProductionById,
    getProductionByMonth
} from "../controllers/production.controller.js";

const productionRoute = Router();

productionRoute.post("/new-production", async (req, res) => {
    const { year, month, production } = req.body;
    const newProduction = await createProduction(year, month, production);
    res
    .status(201)
    .json({
        message: "Produção criada com sucesso!",
        newProduction
    });
});

productionRoute.get("/productions", async (req, res) => {
    const productions = await getAllProductions();
    res
    .json({productions});
});

productionRoute.get("/production-find-id/:id", async (req, res) => {
    const id = req.params.id
    const productionFindId = await getProductionById(id);
    res
    .json({productionFindId});
});

productionRoute.get("/production-find-month", async (req, res) => {
    const { month } = req.body;
    const productionFindMonth = await getProductionByMonth(month);
    res
    .json({productionFindMonth});
});

export { productionRoute }