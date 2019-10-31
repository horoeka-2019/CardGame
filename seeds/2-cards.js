exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cards').del()
        .then(function() {
            // Inserts seed entries
            return knex('cards').insert([
                { id: 1, cardname: 'Ace', drink: 'Waterfall!', do: 'do1', image: '/image1' },
                { id: 2, cardname: '2', drink: 'Choose who drinks!', do: 'do1', image: '/image2' },
                { id: 3, cardname: '3', drink: 'Three is me', do: 'do1', image: '/image3' },
                { id: 4, cardname: '4', drink: 'Thumb Master', do: 'do1', image: '/image4' },
                { id: 5, cardname: '5', drink: 'No pronouns!', do: 'do1', image: '/image5' },
                { id: 6, cardname: '6', drink: 'No pointing!', do: 'do1', image: '/image6' },
                { id: 7, cardname: '7', drink: 'Point to heaven', do: 'do1', image: '/image7' },
                { id: 8, cardname: '8', drink: `8 if for you and a Mate`, do: 'do1', image: '/image8' },
                { id: 9, cardname: '9', drink: 'Rhyme: Pick a word like lime and go around the cirlce, everyone must rhyme', do: 'do1', image: '/image9' },
                { id: 10, cardname: '10', drink: 'Categories: Pick a category such as Basketball. Around the circle everyone has to give a word which fits the category like 3-pointer and Slam Dunk', do: 'do1', image: '/image10' },
                { id: 11, cardname: 'Jack', drink: 'Make a rule', do: 'do1', image: '/image11' },
                { id: 12, cardname: 'Queen', drink: 'Questions: questions must be answerd by questions. First to not question', do: 'do1', image: '/image12' },
                { id: 13, cardname: 'King', drink: 'Pour some of your drink into the circle', do: 'do1', image: '/image13' },
                { id: 14, cardname: 'Joker', drink: `Toilet card, or you can smoke if you're a smoker`, do: 'do1', image: '/image14' }
            ]);
        });
};