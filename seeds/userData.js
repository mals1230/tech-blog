const { User } = require('../models');

const _USER = [
  {
    "id": 1,
    "name": "Mal",
    "email": "mal@gmail.com",
    "password": "password12345"
  },
  {
    "id": 2,
    "name": "Ceili",
    "email": "ceili@gmail.com",
    "password": "password12345"
  },
  {
    "id": 3,
    "name": "Gina",
    "email": "gina@gmail.com",
    "password": "password12345"
  }
]

const seedUser = () => User.bulkCreate(_USER);

module.exports = seedUser;