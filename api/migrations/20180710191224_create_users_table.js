
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('userId').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()

    table.boolean('deleted').notNullable().defaultTo(false)
    table.timestamps(false, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users')
}