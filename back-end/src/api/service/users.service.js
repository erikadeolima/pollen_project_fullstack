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

const getPollenBalance = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  const { pollenBalance } = user;
  return pollenBalance;
}

const updatePollenBalance = async (id, body) => {
  const newBallance = await User.update(body, { where: { id } });
  if (!newBallance) {
    throw errorGenerate(404, 'Not found');
  };
  const balance = await getPollenBalance(id);
  return balance;
};

module.exports = {
  findUserByName,
  updatePollenBalance,
  requestLogin
};