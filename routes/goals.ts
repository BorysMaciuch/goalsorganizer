import express from "express";
import Goal from "../models/goals.model";
const router = express.Router();

router.route("/:userId").get(async (req, res) => {
  const userId = req.params.userId;
  Goal.find()
    .where("userId")
    .equals(userId)
    .then((goals: any) => res.json(goals))
    .catch((err: any) => res.status(400).json("Error: " + err));
});

router.route("/:userId").get(async (req, res) => {
  try {
  const userId = req.params.userId;
  Goal.find()
    .where("userId")
    .equals(userId)
    .then((goals: any) => res.json(goals))
  } catch (e) {
    console.log(e)
  }
});

router.route("/add-goal").post(async (req, res) => {
  try {
    const id = req.body.id;
    const title = req.body.title;
    const actionPoints = req.body.actionPoints;
    const userId = req.body.userId;
    const newGoal = new Goal({ id, title, actionPoints, userId });
    newGoal.save().then(() => res.json("Goal added!"));
  } catch (e) {
    console.log(e);
  }
});

router.route("/add-goal/:id").patch(async (req, res) => {
  try {
    const actionPoint = req.body.actionPoints;
    const goalId = req.params.id;
    const actionPointId = req.body._id;
    Goal.findByIdAndUpdate(
      goalId,
      {
        $push: {
          actionPoints: { description: actionPoint, _id: actionPointId },
        },
      },
      { new: true, upsert: true }
    );
  } catch (e) {
    console.log(e);
  }
});

router.route("/delete-goal/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    Goal.findByIdAndRemove(id, (err: any, res: any) => {
      if (err) throw err;
      else console.log(res);
    });
  } catch (e) {
    console.log(e);
  }
});

router.route("/edit-goal/:id").patch(async (req, res) => {
  try {
    const goalId = req.params.id;
    const description = req.body.description;
    console.log("backend", goalId);
    Goal.findOneAndUpdate(
      { _id: goalId },
      { title: description },

      { new: true, upsert: true },
      function (err: any, action: any) {
        if (err) throw err;
        console.log(action);
      }
    );
  } catch (e) {
    console.log(e);
  }
});

router.route("/delete-action-point/:id").post(async (req, res) => {
  try {
    const goalId = req.body.goalId;
    const actionPointId = req.params.id;
    Goal.findByIdAndUpdate(
      goalId,
      { $pull: { actionPoints: { _id: actionPointId } } },
      { new: true, upsert: true },
      function (err: any, action: any) {
        if (err) throw err;
        console.log(action);
      }
    );
  } catch (e) {
    console.log(e);
  }
});
router.route("/edit-action-point/:id").patch(async (req, res) => {
  try {
    const goalId = req.body.goalId;
    const actionPointId = req.params.id;
    const description = req.body.description;
    Goal.findOneAndUpdate(
      { _id: goalId, "actionPoints._id": actionPointId },
      { "actionPoints.$.description": description },

      { new: true, upsert: true },
      function (err: any, action: any) {
        if (err) throw err;
        console.log(action);
      }
    );
  } catch (e) {
    console.log(e);
  }
});

export default router;
