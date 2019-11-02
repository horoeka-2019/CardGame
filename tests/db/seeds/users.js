exports.seed = knex =>
  knex("players")
    .del()
    .then(() =>
      knex("players").insert([
        { id: 1, playername: "user1" },
        { id: 2, playername: "user2" },
        { id: 3, playername: "user3" },
        { id: 4, playername: "user3" }
      ])
    );
