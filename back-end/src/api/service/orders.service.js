const { Op } = require('sequelize');
const { Order } = require('../../database/models');

const findSalesByUserId = async (userId) => {
  const sales = await Order.findAll({ where: { userId } });
  return sales;
};

module.exports = { findSalesByUserId }