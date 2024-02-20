import { UserEntity } from "../entities/User.entity.js";
import { sequelize } from "../database/connection.js";

const createUser = async (name, cpf, email, password) => {
    await sequelize.sync();
    const newUser = await UserEntity.create({
        name, cpf, email, password
    });
    return newUser;
}

const getAllUsers = async () => {
    return await UserEntity.findAll();
}

const getUserById = async (id) => {
    return await UserEntity.findByPk(id);
}

const getUserByName = async (name) => {
    return await UserEntity.findOne({
        where: {
            name
        }
    });
}

export { createUser, getAllUsers, getUserById, getUserByName }