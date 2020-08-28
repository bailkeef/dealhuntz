const Sequelize = require('sequelize')
const db = require('../db')

const Listing = db.define('listing', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['flip', 'turnkey']],
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Listing
