var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vihaan');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    blind: {
        type: String,
        required: true,
    },
    deaf: {
        type: String,
        required: true,
    },
    mute: {
        type: String,
        required: true,
    },
    physical: {
        type: String,
        required: true,
    }
});
var User = mongoose.model('users', userSchema);
module.exports = User;
