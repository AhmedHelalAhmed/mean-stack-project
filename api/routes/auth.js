var express = require('express');

var jwt = require('jsonwebtoken');// used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config/config');// get config file

var router = express.Router();
var models = require('../models/index');




/* login */
router.post('/login', function (req, res, next) {
  models.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {

    // check if the password is valid
    if (!req.body.password) {
      return res.status(401).send({ auth: false, token: null });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, token: null });
    }
    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    // return the information including token as JSON
    res.status(200).send({ auth: true, token: token, user: user });

  });






});

/* register */
router.post('/register', (req, res, next) => {
  if (!req.body.password) {
    res.status(500).send({ "message": "fill in the password" });
  }
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    userName: req.body.userName
  }).then(user => {

    // create a token
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });




  /* logout */
  router.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
  });




});

module.exports = router;
