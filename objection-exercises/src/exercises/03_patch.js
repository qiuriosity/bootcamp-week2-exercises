const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const updated = await User.query()
    .patch({
      age: 18,
    })
    .where('age', '<', 18)
    .returning('*')
  console.log(updated)

  // -----
  cleanup()
}

run()
