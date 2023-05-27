const userService = require('../service/users.service');
const productsService = require('../service/products.service');
const ordersService = require('../service//orders.service');

const getAllProducts = async (_request, response, next) => {
  try {
    const products = await productsService.getAllProducts();
    return response.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

const login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const userInfo = await userService.requestLogin(email, password);
    return response.status(200).json(userInfo);
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

const getOrdersHistory = async (_request, response, next) => {
  try {
    const id = 1;
    const orderHistoryData = await ordersService.findSalesByUserId(id);
    const orderHistory = orderHistoryData.map(({ dataValues }) => dataValues);
    return response.status(200).json(orderHistory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  updatePollenBalance,
  getAllProducts,
  getOrdersHistory
};