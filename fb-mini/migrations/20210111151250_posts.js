exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userId')
    .references('users.id')

  table
    .text('text')
    .notNullable()

  table
    .timestamp('createdAt')
  
  table
    .integer('likes')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
