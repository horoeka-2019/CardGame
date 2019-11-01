exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cards').del()
        .then(function() {
            // Inserts seed entries
            return knex('cards').insert([
                { id: 1, cardname: 'Ace', drink: 'Waterfall!', do: 'Take a drink', image: '/images/c01.png' },
                { id: 2, cardname: '2', drink: 'Choose who drinks!', do: 'Person on your right takes a drink', image: '/images/s02.png' },
                { id: 3, cardname: '3', drink: 'Three is me', do: 'Take two drinks', image: '/images/h03.png' },
                { id: 4, cardname: '4', drink: 'Thumb Master', do: 'Choose someone to drink for you', image: '/images/d04.png' },
                { id: 5, cardname: '5', drink: 'No pronouns!', do: 'Person on your left takes a drink', image: '/images/c05.png' },
                { id: 6, cardname: '6', drink: 'No pointing!', do: 'Everyone drinks except you', image: '/images/s06.png' },
                { id: 7, cardname: '7', drink: 'Point to heaven', do: 'Drink everytime you hear a name', image: '/images/h07.png' },
                { id: 8, cardname: '8', drink: `8 if for you and a Mate`, do: 'Take a shot', image: '/images/d08.png' },
                { id: 9, cardname: '9', drink: 'Rhyme: Pick a word like lime and go around the cirlce, everyone must rhyme', do: 'Drink some water', image: '/images/c09.png' },
                { id: 10, cardname: '10', drink: 'Categories: Pick a category such as Basketball. Around the circle everyone has to give a word which fits the category like 3-pointer and Slam Dunk', do: 'Drink your drink and one more if the person on the right tells you to drink', image: '/images/s10.png' },
                { id: 11, cardname: 'Jack', drink: 'Make a rule', do: 'Nominate a drink-buddy, if you drink, they drink & vice versa', image: '/images/h11.png' },
                { id: 12, cardname: 'Queen', drink: 'Questions: questions must be answerd by questions. First to not question', do: 'Take a drink', image: '/images/d12.png' },
                { id: 13, cardname: 'King', drink: 'Pour some of your drink into the circle', do: 'take a drink', image: '/images/d13.png' },
                { id: 14, cardname: 'Joker', drink: `Toilet card, or you can smoke if you're a smoker`, do: 'take a drink', image: '/images/c12.png' }
            ]);
        });
};
