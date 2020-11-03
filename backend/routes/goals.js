const router = require('express').Router()
let Goal = require('../models/goals.model')

router.route('/').get((req, res) => {
    Goal.find()
    .then((goals) => res.json(goals))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add-goal').post((req, res) => {
    const id = Number(req.body.id)
    const title = req.body.title 

    const newGoal = new Goal({id, title})
    newGoal
    .save()
    .then(() => res.json('Goal added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router

