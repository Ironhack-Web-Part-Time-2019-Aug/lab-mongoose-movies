const mongoose = require('mongoose');
const {Schema} = mongoose;

const definition = {
  name: String,
  occupation: String,
  catchPhrase: String
}

const celebritySchema = new Schema(definition);
const CelebrityModel = mongoose.model('Celebrity', celebritySchema);
module.exports = CelebrityModel;