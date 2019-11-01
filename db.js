const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getCard: getCard
}

function getUsers (db = connection) {
  return db('players').select()
}

function getUser (id, db = connection) {
  console.log(id)
  return db('players')
    .where('players.id', Number(id))
    .first()
}


function getCard (cardId, db = connection) {
  return db('cards')
    .where('id', cardId)
    .first()
}
