'use strict'
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cidade:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        cont:{
            type: DataTypes.DOUBLE,
            allowNull:false
        }
    }, {
        underscored: true,
    });
    return Users;
}