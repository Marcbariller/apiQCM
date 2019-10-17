var express = require('express');
var router = express.Router();
const User = require('../models/Users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().exec((err, users) => res.json(users));
});

router.post('/', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => res.json(user));
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id).exec((err, user) => res.json(user));
});

router.put('/:id', (req, res) => {
  User.updateOne({ _id: ObjectId(req.params.id) }, req.body, (err, user) => res.json(user))
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, station) => res.json(user))
});

module.exports = router;
