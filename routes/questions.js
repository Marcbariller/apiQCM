var express = require('express');
var router = express.Router();
const Question = require('../models/Questions');

/* GET questions listing. */
router.get('/', function(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  Question.count(function(err, count) {
    if (err) res.json(err);
    Question.find(function(err, questions) {
      if (err) res.json(err);
      res.json({
        count: count,
        page: page,
        limit: limit,
        results: questions
      });
    }).populate('subject', 'title')
      .skip(skip)
      .limit(limit);
  });
});

/* GET question */
router.get('/:id', function(req, res) {
  Question.findById(req.params.id, function (err, question) {
    if (err) {
      res.json(err);
    }
    res.json(question);
  }).populate('subject', 'title');
});

/* PUT question */
router.put('/:id', function(req, res) {
  Question.findByIdAndUpdate(req.params.id, req.body, function (err, question) {
    if (err) res.json(err);
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
