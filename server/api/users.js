const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const userToUpdate = await User.findOne({
      attributes: ['id', 'email']
    })
    const updatedUser = await userToUpdate.update({
      description: req.body.description,
      profilePic: req.body.profilePic
    })

    if (updatedUser) {
      // res.json(updatedUser)
      res.send('Update successfuly.')
    } else {
      throw new Error('Update failed.')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const updatedGoal = await Goal.findByPk(id)
    const updGoal = await updatedGoal.update({
      name: req.body.name,
      targetAmount: req.body.targetAmount,
      currentAmount: req.body.currentAmount,
      targetDate: req.body.targetDate,
      amountPerMonth: req.body.amountPerMonth
    })

    // if (currentUser === req.user.dataValues) {
    // const updatedGoal = await Goal.update(goalObj, {where: {id: id}})
    //const allgoals = await Goal.findAll()

    if (updGoal) {
      res.send('Update successfuly.')
    } else {
      throw new Error('Update failed.')
    }
    // } else {
    //   res.status(401).send('Log in to update a goal.')
    // }
  } catch (err) {
    next(err)
  }
})
