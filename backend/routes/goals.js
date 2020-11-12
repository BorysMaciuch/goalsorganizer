const router = require("express").Router();
let Goal = require("../models/goals.model");


router.route("/").get(async (req, res) => {
  Goal.find()
    .then((goals) => res.json(goals))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add-goal").post(async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const actionPoints = req.body.actionPoints;
  const newGoal = new Goal({ id, title, actionPoints });
  newGoal
    .save()
    .then(() => res.json("Goal added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
Goal.findByIdAndUpdate({ id: '1'}, function(err, goal) {
  console.log(goal)
})

router.route("/add-goal/:id").patch(async (req, res) => {
  const actionPoint = req.body.actionPoints;
  const id = req.params.id;
  Goal.findByIdAndUpdate(id,  { "$push": { "actionPoints": {description: actionPoint} } },
  { "new": true, "upsert": true },
  function (err, action) {
      if (err) throw err;
      console.log(action);
  })
  
});
module.exports = router;
