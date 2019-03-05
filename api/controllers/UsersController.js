var models = require('../models/index');


/* get all users. */
exports.index = (req, res, next) => {
    models.User.findAll().then((result) => res.json(result));
};

/* create new user */
exports.store = (req, res, next) => {
    models.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    }).then((user) => {
        res.json(user);
    });
};


/* get a user */
exports.show = (req, res) => models.User.findById(req.params.id).then((result) => res.json(result))

/* update a user */
exports.update = (req, res) =>
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
        }).then(result => res.json(result));


/* delete a user */
exports.destroy = (req, res) =>
    models.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => res.json(result));