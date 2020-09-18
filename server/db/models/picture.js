const Sequelize = require('sequelize')
const db = require('../db')

const Picture = db.define('picture', {
  name: {
    type: Sequelize.STRING
    // allowNull: false
  },
  img: {
    type: Sequelize.STRING
    // allowNull: false
  }
})

module.exports = Picture
