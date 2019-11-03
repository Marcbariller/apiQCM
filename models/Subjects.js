const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema ({
  name: String,
  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
});

module.exports = mongoose.model('Subject', subjectSchema);
