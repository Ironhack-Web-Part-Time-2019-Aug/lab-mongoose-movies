const {CelebrityModel} = require('../models')
const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/celebrities', (req, res) => {
  CelebrityModel
    .find( { } )
    .then( 
      (celebs) => {
        const prettyCeleb = celebs.map(
          (celeb)=>{
            return {
              id: celeb.id,
              name: celeb.name,
              occupation: celeb.occupation,
              catchPhrase: celeb.catchPhrase
            }
          }
        )
    res.render("celebrities/index",{prettyCeleb})
  }
  )
});

router.get('/celebrities/:id', (req, res) =>{
  const {id} = req.params
    CelebrityModel
      .findOne( { _id: id } )
      .then(
        celeb => {
          const prettyCeleb = {
            id: celeb.id,
            name: celeb.name,
            occupation: celeb.occupation,
            catchPhrase: celeb.catchPhrase
          }
        res.render('celebrities/show', prettyCeleb)
        }
      )
      .catch(err => {res.send(err)})
});

module.exports = router;
