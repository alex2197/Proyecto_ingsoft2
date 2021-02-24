const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

class Cita extends Model {}

Cita.init({
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idTipoCita_fk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCliente_fk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idEmpleado_fk: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Cita'
})