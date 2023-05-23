const { Router } = require('express');

const customerController = require('../controller/customer.controller');

const customerRoute = Router();

customerRoute.post('/', customerController.login);
customerRoute.get('/home', customerController.getAllProducts);
customerRoute.get('/myaccount/', customerController.getOrdersHistory);
customerRoute.put('/myaccount/', customerController.updatePollenBalance);

module.exports = customerRoute;