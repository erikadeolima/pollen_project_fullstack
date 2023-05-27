const { Op } = require('sequelize');
const { User } = require('../../database/models');
const errorGenerate = require('../helper/errorGenerate');
const { checkPassword } = require('../helper/bycrypt');

const findUserByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  return user.id;
};

const requestLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !checkPassword(password, user.password)) {
    throw errorGenerate(404, 'Not found');
  }
  const { id, name, pollenBalance } = user;
  return { id, name, pollenBalance };
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
  requestLogin
};