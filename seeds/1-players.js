exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { id: 1, playername: 'Gankska' },
        { id: 2, playername: 'J-Money' },
        { id: 3, playername: 'Learning' }
     
      ])
    })
}
