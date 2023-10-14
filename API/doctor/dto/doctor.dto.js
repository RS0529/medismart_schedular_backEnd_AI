const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        specialty: { type: DataTypes.STRING, allowNull: false },
        // Add more attributes specific to doctors
    };

    const options = {
        defaultScope: {
            // Define the default scope for this model
            attributes: { exclude: ["someAttribute"] }, // You can exclude certain attributes
        },
        scopes: {
            // Define additional scopes for this model
            withSomeAttribute: { attributes: {} },
        },
    };

    return sequelize.define("doctors", attributes, options);
}
