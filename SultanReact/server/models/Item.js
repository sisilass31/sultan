// models/Item.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Configurez votre connexion à la base de données

const Item = sequelize.define("Item", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageData: {
    type: DataTypes.BLOB("long"),
    allowNull: true,
  },
});

module.exports = Item;
