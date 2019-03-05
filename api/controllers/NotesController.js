var models = require('../models/index');


/* get all notes. */
exports.index = (req, res, next) => {
    models.Note.findAll({ where: { share: true } }).then((result) => res.json(result));
};


/* create new note */
exports.store = (req, res, next) => {
    // ToDO ... save image in server and get the path to save it in the database
    models.Note.create({
        image: req.body.image,
        text: req.body.text,
        userId: req.body.userId,
        share: req.body.share

    }).then((note) => {
        res.json(note);
    });
};


/* get a note */
exports.show = (req, res) => models.Note.findById(req.params.id).then(result => res.json(result));


/* update a note */
exports.update = (req, res) =>
    models.Note.update({
        image: req.body.image,
        text: req.body.text,
        userId: req.body.userId,
        share: req.body.share
    },
        {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result));


/* delete a note */
exports.destroy = (req, res) =>
    models.Note.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))