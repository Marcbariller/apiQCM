const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: String,
  réponses: [{
    text: String,
    correct: Boolean
  }]
});

module.exports = mongoose.model('Question', questionSchema)
