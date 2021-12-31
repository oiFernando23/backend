'use strict'
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.REAL,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
    });

    return Posts;
}