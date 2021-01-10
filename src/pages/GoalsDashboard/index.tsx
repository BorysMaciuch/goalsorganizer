import React from "react";
import FormAddGoal from "../../components/Form/FormAddGoal";
import { Container } from "../../components/Container/styled";
import GoalsList from "../../components/GoalsList";
import { theme } from '../../styles/index'
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
    <Container bgColor={theme.colors.lightBlue}>
      <h1>Goals List</h1>
      <FormAddGoal />
      <GoalsList />
    </Container>
  );
};

export default GoalsDashboard;
