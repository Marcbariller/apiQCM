var express = require('express');
var router = express.Router();
const Subject = require('../models/Subjects');

/* GET sujects listing. */
router.get('/', function(req, res, next) {
  Subject.find().limit(10).exec((err, subjects) => res.json(subjects));
});

/* GET subject */
router.get('/:id', function(req, res) {
  User.findById(req.params.id).populate('stations.id').exec((err, subject) => res.json(subject));
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
