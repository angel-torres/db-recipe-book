
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'pepper', recipe_id: 1},
        {name: 'salt', recipe_id: 2},
        {name: 'vinegar', recipe_id: 3}
      ]);
    });
};
