var express = require('express');
var router = express.Router();
const Question = require('../models/Questions');

/* GET questions listing. */
router.get('/', function(req, res) {
  Question.find().exec((err, questions) => res.json(questions));
});

/* GET question */
router.get('/:id', function(req, res) {
  Question.findById(req.params.id).exec((err, user) => res.json(user));
});

module.exports = router;
