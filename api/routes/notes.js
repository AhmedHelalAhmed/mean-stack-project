var express = require('express');
var router = express.Router();
var VerifyToken = require('../auth/VerifyToken');
var NotesController = require('../controllers/NotesController');

/* get all notes. */
router.get('/', VerifyToken, NotesController.index);

/* create new note */
router.post('/', VerifyToken, NotesController.store);

/* get a note */
router.get("/:id", VerifyToken, NotesController.show);

/* update a note */
router.put("/:id", VerifyToken, NotesController.update);

/* delete a note */
router.delete("/:id", VerifyToken, NotesController.destroy);

module.exports = router;
