import { ProductionEntity } from "../entities/Production.entity.js";
import { sequelize } from "../database/connection.js";

const createProduction = async (year, month, production) => {
    await sequelize.sync();
    const newProduction = ProductionEntity.create({
        year, month, production
    });
    return newProduction;
}

const getAllProductions = async () => {
    return await ProductionEntity.findAll();
}

const getProductionById = async (id) => {
    return await ProductionEntity.findByPk(id);
}

const getProductionByMonth = async (month) => {
    return await ProductionEntity.findOne({
        where: {
            month
        }
    });
}

export { createProduction, getAllProductions, getProductionById, getProductionByMonth }