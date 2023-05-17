const userService = require('../service/users.service');

const getPollenBalance = async (_request, response, next) => {
  try {
    const id = 1;
    const pollensBalance = await userService.getPollenBalance(id);
    return response.status(200).json(pollensBalance);
  } catch (error) {
    next(error);
  }
};

const updatePollenBalance = async (id, balance) => {
  const newBallance = await User.update({ pollenBalance: balance }, { where: { id } });
  console.log(newBallance)
};

module.exports = {
  getPollenBalance,
  updatePollenBalance
};