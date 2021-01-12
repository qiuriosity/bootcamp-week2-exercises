const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  const trans = await User.transaction(async trx => {
    const newUser = await User.query(trx)
      .insert({
        firstName: 'Banana',
        lastName: 'Bread',
        email: 'bananabread@gmail.com',
      })
      .returning('*')

    const newPet = await newUser.$relatedQuery('pets', trx)
      .insert({
        name: 'Apple',
        type: 'CAT',
      })
    
    const totalPets = await Pet.query(trx)
      .resultSize()
    
    if (totalPets > 15) {
      const deleted = await Pet.query(trx)
        .delete()
        .where('type', 'BIRD')
    }

    // throw new Error("This is an error")
    return newUser
  })

  console.log(trans)

  // -----
  cleanup()
}

run()
