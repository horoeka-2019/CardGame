const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getCard: getCard,
  insertPlayer: insertPlayer,
  clearPlayers: clearPlayers
};

function getUsers(db = connection) {
  return db("players").select();
}

function getUser(id, db = connection) {
  console.log(id);
  return db("players")
    .where("players.id", Number(id))
    .first();
}

function getCard(cardId, db = connection) {
  return db("cards")
    .where("id", cardId)
    .first();
}

function insertPlayer(playername, db = connection) {
  return db("players").insert({ playername: playername });
}

function clearPlayers(db = connection) {
  return db("players")
    .del()
    .then(() =>
      db("SQLITE_SEQUENCE")
        .update({ SEQ: 0 })
        .where("NAME", "players")
    )
    .catch(error => console.log(error));
}
