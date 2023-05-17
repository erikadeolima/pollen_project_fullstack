const userService = require('../service/users.service');
const productsService = require('../service/products.service');

const getAllProducts = async (_request, response, next) => {
  try {
    const products = await productsService.getAllProducts();
    return response.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

const getPollenBalance = async (_request, response, next) => {
  try {
    const id = 1;
    const pollensBalance = await userService.getPollenBalance(id);
    return response.status(200).json(pollensBalance);
  } catch (error) {
    next(error);
  }
};

const updatePollenBalance = async (request, response, next) => {
  try {
    const id = 1;
    const { balance } = request.body;
    const pollensBalance = await userService.updatePollenBalance(id, balance);
    return response.status(200).json(pollensBalance);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPollenBalance,
  updatePollenBalance,
  getAllProducts
};