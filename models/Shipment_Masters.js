const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

const Shipment_Masters = sequelize.define("shipment_masters", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Shipment_Masters;
