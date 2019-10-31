exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('players').del()
        .then(function() {
            // Inserts seed entries
            return knex('players').insert([
                { id: 1, playername: 'player1' },
                { id: 2, playername: 'player2' },
                { id: 3, playername: 'player3' }
            ]);
        });
};