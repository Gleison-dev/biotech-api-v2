import { CatalogEntity } from "../entities/Catalog.entity.js";
import { sequelize } from "../database/connection.js";

const createCatalog = async (name_product, description, price) => {
    await sequelize.sync();
    const newUser = await CatalogEntity.create({
        name_product, description, price
    });
    return newUser
}

const getAllCatalogs = async () => {
    return await CatalogEntity.findAll();
}

const getCatalogById = async (id) => {
    return await CatalogEntity.findByPk(id);
}

const getCatalogoByNameProduct = async (name_product) => {
    return await CatalogEntity.findOne({
        where: {
            name_product
        }
    });
}

export { createCatalog, getAllCatalogs, getCatalogById, getCatalogoByNameProduct }