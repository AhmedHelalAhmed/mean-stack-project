var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthController');

/* login */
router.post('/login', AuthController.login);

/* register */
router.post('/register', AuthController.register);


/* logout */
router.get('/logout', AuthController.logout);

module.exports = router;
