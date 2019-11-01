const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(playername => {
      res.render('index', { players: playername })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/addPlayer', (req, res) => {
  res.render('addPlayer', {})
})

router.post('/addPlayer', (req, res) => {
  db.insertPlayer(req.body.name).then(res.redirect('/'))
})

router.get('/card/:playerId', (req, res) => {
  const cardId = getRandomInt(1, 15)
  const playerId = req.params.playerId
  db.getUser(playerId)
    .then(player => {
      const playerName = player.playername
      db.getCard(cardId)
        .then(card => {
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

function consoleLog (user) {
  console.log(user)
  return Promise.resolve(user)
}

module.exports = router
