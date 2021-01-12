const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const firstUser = await User.query()
    .first()
  console.log(firstUser.fullName, firstUser.hasChildren)

  const beethoven = await Pet.query()
    .where('name', 'Beethoven')
  console.log(beethoven, beethoven.isDog)

  // -----
  cleanup()
}

run()
