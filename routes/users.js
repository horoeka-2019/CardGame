const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(playername => {
      res.render("index", { players: playername });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/addPlayer", (req, res) => {
  res.render("addPlayer", {});
});

router.post("/addPlayer", (req, res) => {
  db.insertPlayer(req.body.name).then(res.redirect("/"));
});

const round = 3;
let count = 1;
router.get("/card/:playerId", (req, res) => {
  let usersNumber = 0;
  db.getUsers()
    .then(users => (usersNumber = users.length))
    .then(usersNumber => {
      const totalCount = round * usersNumber;
      if (count > totalCount) {
        db.clearPlayers().then(() => {
          count = 1;
          res.redirect("/");
        });
      } else {
        const cardId = getRandomInt(1, 15);

        const playerId = Number(req.params.playerId);
        const nextPlayerId = playerId + 1;

        if (playerId <= usersNumber) {
          db.getUser(playerId).then(player => {
            const playerName = player.playername;
            db.getCard(cardId).then(card => {
              const cardWithPlayerName = {
                playerId: nextPlayerId,
                player: playerName,
                card: card
              };
              count++;
              res.render("card", { card: cardWithPlayerName });
            });
          });
        } else {
          res.redirect("/card/1");
        }
      }
    });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

router.get("/start", (req, res) => {
  res.render("start");
});

function consoleLog(user) {
  console.log(user);
  return Promise.resolve(user);
}

module.exports = router;
