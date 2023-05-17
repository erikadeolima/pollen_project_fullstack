const { Op } = require('sequelize');
const { User } = require('../../database/models');
const errorGenerate = require('../helper/errorGenerate');

const findUserByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  return user.id;
};

const getPollenBalance = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  return user.pollenBalance;
};

const updatePollenBalance = async (id, balance) => {
  const newBallance = await User.update({ pollenBalance: balance }, { where: { id } });
  const userBallance = getPollenBalance(id);
  if (!newBallance) {
    throw errorGenerate(404, 'Not found');
  }
  return userBallance;
};

module.exports = {
  findUserByName,
  updatePollenBalance,
  getPollenBalance
};