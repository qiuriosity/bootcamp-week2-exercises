const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersPets = await User.query()
    .withGraphFetched('pets')
  console.dir(usersPets, { depth: null })

  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query()
    .withGraphFetched('[pets, children]')
  console.dir(usersPetsChildren, { depth: null })

  // Get all users, their parents, and their grandparents
  const usersParents = await User.query()
    .withGraphFetched('[parents, parents.parents]')
  console.dir(usersParents, { depth: null })

  // Get all users, their pets, their children, and their childrens' pets
  const usersFamilyPets = await User.query()
    .withGraphFetched('[pets, children, children.pets]')
  console.dir(usersFamilyPets, { depth: null })

  // -----
  cleanup()
}

run()
