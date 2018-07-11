
exports.up = (knex) => {
  return knex.schema.createTable('folders', (table) => {
    table.increments('folderId').primary()
    table.string('name').notNullable()
    table.string('description')
    table.integer('parentId').unsigned()

    table.boolean('deleted').notNullable().defaultTo(false)
    table.timestamps(false, true)

    table.foreign('parentId').references('folders.folderId')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('course_videos')
}