const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('04b4fa2a-8cb3-49e9-a202-222240d29bc7')
  console.log(me)

  // Use that instance to create a new pet related that user
  const insertPet = await me.$relatedQuery('pets')
    .insert({
      name: 'hi',
      type: 'FISH',
    })

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const getFamily = await me.$fetchGraph('[pets, children]')
  console.dir(getFamily, { depth: null })

  // -----
  cleanup()
}

run()
