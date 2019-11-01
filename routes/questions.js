var express = require('express');
var router = express.Router();
const Question = require('../models/Questions');

/* GET questions listing. */
router.get('/', function(req, res) {
  Question.find().exec((err, questions) => res.json(questions));
});

/* GET question */
router.get('/:id', function(req, res) {
  Question.findById(req.params.id, function (err, question) {
    if (err) {
      res.json(err);
    }
    res.json(question);
  });
});

/* DELETE question */
router.delete('/:id', function(req, res) {
  Question.findByIdAndDelete(req.params.id, function (err, question) {
    if (err) {
      res.json(err);
    }
    res.json(question);
  });
});

module.exports = router;
