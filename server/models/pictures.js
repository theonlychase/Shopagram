var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  passportLocalMongoose = require('passport-local-mongoose');

var Pictures = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'users'},
  picture: String,
  url: String
});

Pictures.plugin(passportLocalMongoose);

module.exports = mongoose.model('Pictures', Pictures);
