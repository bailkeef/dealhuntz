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
    const listings = await Listing.findOne({
      where: {
        id: req.params.listingId
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.get('/location/:city', async (req, res, next) => {
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

router.get('/users/:userId', async (req, res, next) => {
  try {
    const listings = await Listing.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.post('/create/:userId', async (req, res, next) => {
  try {
    const listing = await Listing.create({
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      price: req.body.price,
      description: req.body.description,
      type: req.body.type
    })
    res.json(listing)
  } catch (err) {
    next(err)
  }
})
