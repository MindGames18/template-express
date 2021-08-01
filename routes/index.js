var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/api/test', (req, res) => {
  let x = "Your response has been noted :) "
  res.status(200).send(x)
})

module.exports = router;
