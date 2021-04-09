import { Sequelize } from 'sequelize';



const db = new Sequelize('node', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    //Logging: false,
});


export default db;