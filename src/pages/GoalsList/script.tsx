import React, { useState } from "react";
import FormAddGoal from "../../components/FormAddGoal/script";

export interface Goal {
  title: string;
}
const GoalsList: React.FC = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);

  const AddGoal = (goal: Goal): void => {
    setGoals([...goals, goal]);
  };
  console.log(goals)
  return (
    <div>
      <div>Goals List</div>
      <FormAddGoal addGoal={AddGoal}/>
      <div>
        {goals.map((goal: Goal, i) => (
          <div key={i}>{goal.title}</div>
        ))}
      </div>
    </div>
  );
};

export default GoalsList;
