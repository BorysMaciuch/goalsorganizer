import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "../Goal/script";

export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  _id: string;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}

const GoalsList: React.FC = () => {
  const [goals, setGoals] = useState<Array<GoalType>>([]);
    //TODO
    //move handlers to services; do not pass them as props from here
  const handleDeleteGoal = (
    e: React.FormEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/goals/delete-goal/${id}`)
      .catch((err) => console.log(err));
  };
  const handleDeleteActionPoint = (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string
  ) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/goals/delete-action-point/${id}`, {
        goalId: goalId,
      })
      .catch((err) => console.log(err));
  };
  const handleEditActionPoint = (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string,
    description: string
  ) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/goals/edit-action-point/${id}`, {
        goalId: goalId,
        description: description
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:5000/goals").then((res) => setGoals(res.data));
  }, []);
  return (
    <div>
      {goals.map((goal: GoalType) => (
        <Goal
          key={uuidv4()}
          title={goal.title}
          goalId={goal._id}
          actionPoints={goal.actionPoints}
          handleDeleteActionPoint={handleDeleteActionPoint}
          handleEditActionPoint={handleEditActionPoint}
          handleDeleteGoal={handleDeleteGoal}
        />
      ))}
    </div>
  );
};

export default GoalsList;
