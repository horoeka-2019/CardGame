const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/addPlayer', (req, res) => {
  res.render('addPlayer')
})

router.post('/addPlayer', (req, res) => {
  db.insertPlayer(req.body.name).then(() => db.getUsers()).then(users => console.log(users))
    .then(res.render('playersList'))
})

router.get('/card/:playerId', (req, res) => {
  const cardId = getRandomInt(1, 5)
  const playerId = req.params.playerId
  db.getUser(playerId)
    .then(player => {
      db.getCard(cardId)
        .then(card => {
          const playerName = player.playername
          const cardWithPlayerName = {
            player: playerName,
            card: card
          }
          res.render('card', { card: cardWithPlayerName })
        })
    })
})

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

router.get('/start', (req, res) => {
  res.render('start')
})

module.exports = router
