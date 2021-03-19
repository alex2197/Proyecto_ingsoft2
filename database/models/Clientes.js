const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;