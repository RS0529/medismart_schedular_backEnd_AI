const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
module.exports = db = {};
require("dotenv").config();

initialize();

async function initialize() {
    const database = process.env.DATABASE;
    const user = process.env.DATABASE_USER;
    const password = process.env.DATABASE_PASSWORD;

    const sequelize = new Sequelize(database, user, password, {
        dialect: "mysql",
    });
    if (!sequelize) {
        console.log(`Connection Failed 🚫`);
    } else {
        console.log(`Connected ✅`);
    }
    // init models and add them to the exported db object
    db.Doctor = require("../API/doctor/dto/doctor.dto")(sequelize);

    
    await sequelize.sync();
}
