const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/addPlayer', (req, res) => {
  res.render('addPlayer')
})

router.post('/addPlayer', (req, res) => {
  db
  res.redirect('/')
})


router.get('/start', (req, res) => {
  res.render('start')
})

module.exports = router
