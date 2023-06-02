
const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const user2Helper = require('../db/queries/user2');

router.get('/', (req,res) => {
  db.query('SELECT * FROM users').then(data => {
    console.log(data.rows);
    return res.render('urls_index');
  })
})

router.get('/new', (req,res) => {
  user2Helper.getSingleUser(2).then(user => {
    console.log("query has finished");
    console.log(user);
    return res.render('urls_new');
  })
})

router.post('/', (req, res) => {
  return res.send("should save");
})


module.exports = router;
