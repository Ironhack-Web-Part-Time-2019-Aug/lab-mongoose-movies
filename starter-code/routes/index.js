const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity
    .find({}) // retorna todos documentos
    .then( // sucesso
      (celebrities) => {
        res.send(celebrities);
      }
    )
    .catch( // se der erro
      (error) => {
        console.log(error);
        res.send(error);
        next();
      }
    );
});

module.exports = router;
