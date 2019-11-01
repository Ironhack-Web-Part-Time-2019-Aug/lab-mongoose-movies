const mongoose     = require('mongoose');
const {CelebrityModel} = require('../models')

mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const seed = [{
  name: "Coe",
  occupation: "Teacher",
  catchPhrase: "Meu filho é lindo"
},
{
  name: "Sicuto",
  occupation: "Teacher Assistant",
  catchPhrase: "Não faz o que eu não faria"
},
{
  name: "Marcelo",
  occupation: "teacher Assistant",
  catchPhrase: "O trampo ta foda"
}]

CelebrityModel.insertMany(seed, function(err, doc) {err ? console.log(err) : console.log(doc)})
