exports.up = function(knex) {
    return knex.schema.createTable('cards', (table) => {
        table.increments('id').primary()
        table.string('cardname')
        table.string('drink')
        table.string('do')
        table.string('image')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cards')
};