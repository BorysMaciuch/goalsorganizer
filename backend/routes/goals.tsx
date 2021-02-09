const router = require("express").Router();
let Goal = require("../models/goals.model.tsx");

router.route("/:userId").get(async (req, res) => {
  const userId = req.params.userId
  Goal.find().where('userId').equals(userId)
    .then((goals) => res.json(goals))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add-goal").post(async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const actionPoints = req.body.actionPoints;
  const userId = req.body.userId
  const newGoal = new Goal({ id, title, actionPoints, userId });
  newGoal
    .save()
    .then(() => res.json("Goal added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/add-goal/:id").patch(async (req, res) => {
  const actionPoint = req.body.actionPoints;
  const goalId = req.params.id;
  const actionPointId = req.body._id;
  Goal.findByIdAndUpdate(
    goalId,
    {
      $push: { actionPoints: { description: actionPoint, _id: actionPointId } },
    },
    { new: true, upsert: true },
    function (err, action) {
      if (err) throw err;
      console.log(action);
    }
  );
});

router.route("/delete-goal/:id").delete(async (req, res) => {
  const id = req.params.id;
  Goal.findByIdAndRemove(id, (err, res) => {
    if (err) throw err;
    else console.log(res);
  });
});
router.route("/delete-action-point/:id").post(async (req, res) => {
  const goalId = req.body.goalId;
  const actionPointId = req.params.id;
  Goal.findByIdAndUpdate(
    goalId,
    { $pull: { actionPoints: { _id: actionPointId } } },
    { new: true, upsert: true },
    function (err, action) {
      if (err) throw err;
      console.log(action);
    }
  );
});
router.route("/edit-action-point/:id").patch(async (req, res) => {
  const goalId = req.body.goalId;
  const actionPointId = req.params.id;
  const description = req.body.description;
  Goal.findOneAndUpdate(
    { _id: goalId, "actionPoints._id": actionPointId },
    { "actionPoints.$.description": description },

    { new: true, upsert: true },
    function (err, action) {
      if (err) throw err;
      console.log(action);
    }
  );
});
module.exports = router;
