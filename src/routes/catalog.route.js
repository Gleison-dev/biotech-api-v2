import { Router } from "express";
import { 
    createCatalog,
    getAllCatalogs,
    getCatalogById,
    getCatalogoByNameProduct
} from "../controllers/catalog.controller.js";

const catalogRoute = Router();

catalogRoute.post("/new-catalog", async (req, res) => {
    const { name_product, description, price } = req.body;
    const newCatalog = await createCatalog(name_product, description, price);
    res
    .status(201)
    .json({
        message: "Catálogo criado com sucesso!",
        newCatalog
    });
});

catalogRoute.get("/catalogs", async (req, res) => {
    const catalogs = await getAllCatalogs();
    res
    .json({catalogs});
});

catalogRoute.get("/catalog-find-id/:id", async (req, res) => {
    const id = req.params.id;
    const catalogFindId = await getCatalogById(id);
    res
    .json({catalogFindId});
});

catalogRoute.get("/catalog-find-name-product", async (req, res) => {
    const { name_product } = req.body;
    const catalogFindNameProduct = await getCatalogoByNameProduct(name_product);
    res
    .json({catalogFindNameProduct});
});

export { catalogRoute }