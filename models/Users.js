const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    questions: [{
        id: {type: Schema.Types.ObjectId, ref: 'Question'}
    }]
});

module.exports = mongoose.model('User', userSchema); 