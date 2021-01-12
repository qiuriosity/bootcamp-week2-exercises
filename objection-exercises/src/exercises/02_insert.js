const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const inserted = await User.query()
    .insert({
      email: 'eqiu@college.harvard.edu',
      firstName: 'Emily',
      lastName: 'Qiu',
      age: 18,
    })
    .returning('*')
  console.log(inserted)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const insertedPet = await Pet.query()
    .insert({
      ownerId: '04b4fa2a-8cb3-49e9-a202-222240d29bc7',
      type: 'DOG',
      name: 'Beethoven',
    })
    .returning('*')
  console.log(insertedPet)

  // -----
  cleanup()
}

run()
