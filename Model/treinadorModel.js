const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize ('squitle::memory:');
const Treinador = sequelize.define(
    'Treinador',

    {    ID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    
);