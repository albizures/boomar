exports.up = (knex) => {
  return knex.schema.createTable('links', (table) => {
    table.increments('linkId').primary()
    table.string('link').notNullable()
    table.integer('timesVisited').unsigned().defaultTo(0)

    table.boolean('deleted').notNullable().defaultTo(false)
    table.timestamps(false, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('links')
}