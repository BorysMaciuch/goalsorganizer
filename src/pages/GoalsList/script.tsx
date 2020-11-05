import React, { useState, useEffect } from "react";
import FormAddGoal from "../../components/FormAddGoal/script";
import FormAddActionPoint from "../../components/FormAddActionPoint/script";
import {Container} from '../../components/Container/styled'
import axios from 'axios'

export interface Goal {
  id: string;
  title: string;
  actionPoints: Array<ActionPointDescription>;
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
  
  const AddActionPoint = (actionPoint: ActionPointDescription, title: string): void => {
    setActionPoints([...actionPoints, {[title]: actionPoint}])
    
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/goals")
      .then((res) => setGoals(res.data));
  }, [goals]);

  return (
    <Container>
      <div>Goals List</div>
      <FormAddGoal />
      <div>
        {goals.map((goal: Goal, i) => (
          <div key={i}>
            <h3>{goal.title}</h3>
            <FormAddActionPoint addActionPoint={AddActionPoint} goalTitle={goal.title} id={goal.id}/>
            <div>{goal.actionPoints.map(actionPoint =>  <div>{actionPoint.description}</div>)}</div>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GoalsList;
