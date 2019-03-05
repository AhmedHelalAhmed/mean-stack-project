var express = require('express');
var router = express.Router();
var models = require('../models/index');
var VerifyToken = require('../auth/VerifyToken');


/* get all notes. */
router.get('/', VerifyToken, (req, res, next) => {
  console.log("helal");
  console.log(req.userId);
  models.Note.findAll({ where: { share: true } }).then((result) => res.json(result));
});



/* create new note */
router.post('/', VerifyToken, (req, res, next) => {

  // ToDO ... save image in server and get the path to save it in the database
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
router.get("/:id", VerifyToken, (req, res) =>
  models.Note.findById(req.params.id).then((result) => res.json(result))
);


/* update a note */
router.put("/:id", VerifyToken, (req, res) =>
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
router.delete("/:id", VerifyToken, (req, res) =>
  models.Note.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.json(result))
);




module.exports = router;
