exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cards').del()
        .then(function() {
            // Inserts seed entries
            return knex('cards').insert([
                { id: 1, cardname: 'card1', drink: 'drink1', do: 'do1', image: '/image1' },
                { id: 2, cardname: 'card2', drink: 'drink1', do: 'do1', image: '/image1' },
                { id: 3, cardname: 'card3', drink: 'drink1', do: 'do1', image: '/image1' }
            ]);
        });
};