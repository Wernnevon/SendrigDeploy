const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/express')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false,
    len: [6, 255]
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false,
    len: [6, 255]
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false,
    len: [6, 1024]
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    allowEmpty: false,
    defaultValue: false,
  }
});

sequelize.sync();

module.exports = User;
