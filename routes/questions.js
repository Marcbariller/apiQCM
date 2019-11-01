var express = require('express');
var router = express.Router();
const Question = require('../models/Questions');

/* GET questions listing. */
router.get('/', function(req, res) {
  Question.find().exec((err, questions) => res.json(questions));
});

module.exports = router;
