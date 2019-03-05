var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* get all notes. */
router.get('/', function (req, res, next) {
  models.Note.findAll({ where: { share: true } }).then((result) => res.json(result));
});

/* create new note */
router.post('/', (req, res, next) => {
  models.Note.create({
    image: req.body.image,
    text: req.body.text,
    userId: req.body.userId,
    share: req.body.share

  }).then((note) => {
    res.json(note);
  });



});

/* get a note */
router.get("/:id", (req, res) =>
  models.Note.findById(req.params.id).then((result) => res.json(result))
);



/* update a note */
router.put("/:id", (req, res) =>
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
    }).then((result) => res.json(result))
);


/* delete a note */
router.delete("/:id", (req, res) =>
  models.Note.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.json(result))
);




module.exports = router;
