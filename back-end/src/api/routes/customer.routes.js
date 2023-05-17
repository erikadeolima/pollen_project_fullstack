const { Router } = require('express');

const customerController = require('../controller/customer.controller');

const customerRoute = Router();

customerRoute.get('/', customerController.getAllProducts);
customerRoute.get('/myaccount/', customerController.getPollenBalance);
customerRoute.put('/myaccount/', customerController.updatePollenBalance);

module.exports = customerRoute;