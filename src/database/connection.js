import { Sequelize } from "sequelize";

const sequelize = new Sequelize('biotech', 'root', 'Gleison007!', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnection = () => {
    try{
        sequelize.authenticate();
        console.log("Conexão bem sucedida!");
    } catch(error){
        console.log("Conexão mal sucedidada", error);
    }
}

export { sequelize, testConnection }