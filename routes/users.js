var express = require('express');
var router = express.Router();
const User = require('../models/Users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  User.count(function(err, count) {
    if (err) res.json(err);
    User.find(function(err, questions) {
      if (err) res.json(err);
      res.json({
        count: count,
        page: page,
        limit: limit,
        results: questions
      });
    }).skip(skip)
      .limit(limit);
  });
});

/* POST user */
router.post('/', function(req, res) {
  const user = new User(req.body);
  user.save((err, user) => res.json(user));
});

/* GET user */
router.get('/:id', function(req, res) {
  User.findById(req.params.id).exec((err, user) => res.json(user));
});

/* PUT user */
router.put('/:id', function(req, res) {
  User.updateOne({ _id: ObjectId(req.params.id) }, req.body, (err, user) => res.json(user));
});

/* DELETE user */
router.delete('/:id', function(req, res) {
  User.findByIdAndDelete(req.params.id, (err, station) => res.json(user));
});

module.exports = router;
