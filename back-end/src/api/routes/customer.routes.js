const { Router } = require('express');

/* const customerController = require('../controllers/customer.controller'); */
/* const { authorizationToken } = require('../middlewares/authToken'); */

const customerRoute = Router();

customerRoute.get('/', () => console.log("homepage"));
customerRoute.get('/checkout', () => console.log("checkout"));
customerRoute.get('/myaccount', () => console.log("myaccount"));
customerRoute.post('/about', () => console.log("about"));

module.exports = customerRoute;