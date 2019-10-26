var express = require('express');
var router = express.Router();
const User = require('../models/Users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().exec((err, users) => res.json(users));
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
