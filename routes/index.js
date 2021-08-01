var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/test', (req, res) => {
  let x = "Your response has been noted :) "
  res.status(200).send(x)
})

module.exports = router;
