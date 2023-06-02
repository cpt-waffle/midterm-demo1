
const express = require('express');
const router  = express.Router();

router.get('/', (req,res) => {
  return res.render('urls_index');
})

router.get('/new', (req,res) => {
  return res.render('urls_new');
})

router.post('/', (req, res) => {
  return res.send("should save");
})


module.exports = router;
