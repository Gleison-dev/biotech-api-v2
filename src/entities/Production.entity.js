import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const ProductionEntity = database.define("tb_production", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    year: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    month: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    production: {
        type: DataTypes.FLOAT(15, 2),
        allowNull: false
    }
});

export { ProductionEntity }