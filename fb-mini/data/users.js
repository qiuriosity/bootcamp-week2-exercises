const casual = require('casual')

casual.define('users', () => ({
  id: casual.uuid,
  email: casual.email,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.users)
}

module.exports = userData
