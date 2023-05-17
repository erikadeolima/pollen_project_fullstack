const { Router } = require('express');

const customerController = require('../controller/customer.controller');

const customerRoute = Router();

customerRoute.get('/myaccount/', customerController.getPollenBalance);

module.exports = customerRoute;