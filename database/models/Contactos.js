const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Contactos extends Model {}

Contactos.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    affair: DataTypes.STRING,
    message: DataTypes.STRING,
}, {
    sequelize,
    modelName: "contacto"
});

module.exports = Contactos;