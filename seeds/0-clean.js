exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()
}
