const router = require('express').Router()
const {Listing} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const listings = await Listing.findAll()
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.get('/:listingId', async (req, res, next) => {
  try {
    const listings = await Listing.findAll({
      where: {
        id: req.params.listingId
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.get('/:city', async (req, res, next) => {
  try {
    const listings = await Listing.findAll({
      where: {
        city: req.params.city
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})
