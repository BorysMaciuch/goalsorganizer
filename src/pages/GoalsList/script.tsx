import React, { useState } from "react";
import FormAddGoal from "../../components/FormAddGoal/script";
import FormAddActionPoint from "../../components/FormAddActionPoint/script";
import {Container} from '../../components/Container/styled'

export interface Goal {
  title: string;
}

export interface ActionPointDescription {
  description: string;
}

export interface ActionPoint {
  title: ActionPointDescription
}
const GoalsList: React.FC = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);
  const [actionPoints, setActionPoints] = useState<Array<any>>([])
  const AddGoal = (goal: Goal): void => {
    setGoals([...goals, goal]);
  };
  const AddActionPoint = (actionPoint: ActionPointDescription, title: string): void => {
    setActionPoints([...actionPoints, {[title]: actionPoint}])
  }
  console.log(goals);
  console.log(actionPoints)
  return (
    <Container>
      <div>Goals List</div>
      <FormAddGoal addGoal={AddGoal} />
      <div>
        {goals.map((goal: Goal, i) => (
          <div key={i}>
            <h3>{goal.title}</h3>
            <FormAddActionPoint addActionPoint={AddActionPoint} goalTitle={goal.title}/>
            <div>{actionPoints.map(el => el[goal.title] ? <div>{el[goal.title].description}</div> : null)}</div>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GoalsList;
