var express = require('express');
var router = express.Router();
var models = require('../models/index');
var VerifyToken = require('../auth/VerifyToken');

/* get all users. */
router.get('/', VerifyToken, (req, res, next) => {

  models.User.findAll().then((result) => res.json(result));

});

/* create new user */
router.post('/', VerifyToken, (req, res, next) => {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    userName: req.body.userName
  }).then((user) => {
    res.json(user);
  });
});

/* get a user */
router.get("/:id", VerifyToken, (req, res) =>
  models.User.findById(req.params.id).then((result) => res.json(result))
);

/* get a user */
router.get("/:id", VerifyToken, (req, res) =>
  models.User.findById(req.params.id).then((result) => res.json(result))
);


/* update a user */
router.put("/:id", VerifyToken, (req, res) =>
  models.User.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    userName: req.body.userName
  },
    {
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
);


/* delete a user */
router.delete("/:id", VerifyToken, (req, res) =>
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.json(result))
);




module.exports = router;
