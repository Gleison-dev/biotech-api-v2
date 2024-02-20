import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const CatalogEntity = database.define('tb_catalog', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name_product: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255)
    },
    price: {
        type: DataTypes.DECIMAL(10, 2)
    }
});

export { CatalogEntity }