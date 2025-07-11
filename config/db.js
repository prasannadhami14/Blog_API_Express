require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: true,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter:true});
        console.log("Database Synchronized sucessfully");

    } catch(error) {
        console.log("connection failed",error);
    }

}

module.exports = { connectDB, sequelize };