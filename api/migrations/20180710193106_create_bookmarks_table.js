exports.up = (knex) => {
  return knex.schema.createTable('bookmark', (table) => {
    table.increments('bookmarkId').primary()
    table.string('name').notNullable()
    table.string('description')
    table.integer('parentId').unsigned()
    table.integer('linkId').unsigned()

    table.boolean('deleted').notNullable().defaultTo(false)
    table.timestamps(false, true)

    table.foreign('parentId').references('folders.folderId')
    table.foreign('linkId').references('links.linkId')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('course_videos')
}