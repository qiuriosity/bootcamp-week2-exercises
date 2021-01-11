exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('user1Id')
    .notNullable()
    .references('users.id')

  table
    .uuid('user2Id')
    .notNullable()
    .references('users.id')

  table
    .timestamp('requestedAt')
  
  table
    .enum('status', ['ACCEPTED', 'DECLINED', 'REQUESTED'])
    .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')