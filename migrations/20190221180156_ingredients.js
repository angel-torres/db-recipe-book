
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredients", function(table) {
        table.increments();

        table.string('name', 128)
        .notNullable()
        .unique();

        table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("ingredients")
};
