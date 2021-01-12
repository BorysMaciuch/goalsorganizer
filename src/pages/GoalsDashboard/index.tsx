import React, { useState } from "react";
import FormAddGoal from "../../components/Form/FormAddGoal";
import { Container } from "../../components/Container/styled";
import GoalsList from "../../components/GoalsList";
import { theme } from '../../styles/index'
import { getGoals, deleteGoal, addGoal } from "../../services/api";

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

export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  _id: string;
}

const GoalsDashboard: React.FC = () => {
  const [goals, setGoals] = useState<Array<GoalType>>([]);

  const handleGetGoals = async () => {
    const goals = await getGoals();
    setGoals(goals);
  };

  const handleDeleteGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string
  ) => {
    await deleteGoal(e, goalId);
    const goals = await getGoals();
    setGoals(goals)
  };

  const handleAddGoal = async (e:React.FormEvent<HTMLButtonElement>, goalTitle: string, id: string) => {
    await addGoal(e, goalTitle, id)
    const goals = await getGoals();
    setGoals(goals)
  }

  return (
    <Container bgColor={theme.colors.lightBlue}>
      <h1>Goals List</h1>
      <FormAddGoal handleAddGoal={handleAddGoal}/>
      <GoalsList goals={goals} handleDeleteGoal={handleDeleteGoal} handleGetGoals={handleGetGoals}/>
    </Container>
  );
};

export default GoalsDashboard;
