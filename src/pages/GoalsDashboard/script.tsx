import React from "react";
import FormAddGoal from "../../components/FormAddGoal/script";
import { Container } from "../../components/Container/styled";
import GoalsList from "../../components/GoalsList/script";

export interface Goal {
  id: string;
  title: string;
  actionPoints: Array<ActionPointDescription>;
  _id: string;
}

export interface ActionPointDescription {
  description: string;
  _id: string;
}

const GoalsDashboard: React.FC = () => {
  return (
    <Container>
      <div>Goals List</div>
      <FormAddGoal />
      <GoalsList />
    </Container>
  );
};

export default GoalsDashboard;
