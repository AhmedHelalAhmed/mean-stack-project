var express = require('express');
var router = express.Router();
var models = require('../models/index');
var VerifyToken = require('../auth/VerifyToken');
var UsersController = require('../controllers/UsersController');

/* get all users. */
router.get('/', VerifyToken, UsersController.index);

/* create new user */
router.post('/', VerifyToken, UsersController.store);

/* get a user */
router.get("/:id", VerifyToken, UsersController.show);

/* update a user */
router.put("/:id", VerifyToken, UsersController.update);

/* delete a user */
router.delete("/:id", VerifyToken, UsersController.destroy);

module.exports = router;
