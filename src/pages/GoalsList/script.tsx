import React, { useState, useEffect } from "react";
import FormAddGoal from "../../components/FormAddGoal/script";
import FormAddActionPoint from "../../components/FormAddActionPoint/script";
import {Container} from '../../components/Container/styled'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

export interface Goal {
  id: string;
  title: string;
  actionPoints: Array<ActionPointDescription>;
  _id: string;
}

export interface ActionPointDescription {
  description: string;
}


const GoalsList: React.FC = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/goals")
      .then((res) => setGoals(res.data));
  }, []);
  console.log(goals)
  return (
    <Container>
      <div>Goals List</div>
      <FormAddGoal />
      <div>
        {goals.map((goal: Goal) => (
          <div key={uuidv4()}>
            <h3>{goal.title}</h3>
            <FormAddActionPoint id={goal._id}/>
            <div>{goal.actionPoints.map(actionPoint =>  <div key={uuidv4()}>{actionPoint.description}</div>)}</div>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GoalsList;
