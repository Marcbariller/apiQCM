var express = require('express');
var router = express.Router();
const Subject = require('../models/Subjects');

/* GET sujects listing. */
router.get('/', function(req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  Subject.count(function(err, count) {
    if (err) res.json(err);
    Subject.find(function(err, subjects) {
      if (err) res.json(err);
      res.json({
        count: count,
        page: page,
        limit: limit,
        results: subjects
      });
    }).skip(skip)
      .limit(limit);
  });
});

/* GET subject */
router.get('/:id', function(req, res) {
  Subject.findById(req.params.id, function (err, subject) {
    if (err) res.json(err);
    res.json(subject);
  }).populate('questions');
});

/* POST subject */
router.post('/', function(req, res) {
  let subject = new Subject(req.body);
  subject.save((err, sb) => res.json(sb));
});

/* PUT user */
router.put('/:id', function(req, res) {
  Subject.findByIdAndUpdate(req.params.id, req.body, (err, subject) => res.json(subject));
});

/* DELETE company */
router.delete('/:id', function(req, res) {
  Subject.findByIdAndDelete(req.params.id, (err, subject) => res.json(subject));
});

module.exports = router;
