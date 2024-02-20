import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database, } from "../database/connection.js";

const UserEntity = database.define("tb_user", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50)
    },
    password: {
        type: DataTypes.STRING(20)
    }
});

export { UserEntity }