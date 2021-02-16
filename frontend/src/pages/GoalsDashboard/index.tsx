import React, { useContext, useState, useEffect } from "react";
import FormAddGoal from "../../components/Form/FormAddGoal";
import { Container } from "../../components/Container/styled";
import GoalsList from "../../components/GoalsList";
import { theme } from "../../styles/index";
import { SubHeading } from '../../components/Typography/styled'
import {
  getGoals,
  addGoal,
  deleteGoal,
  editGoal,
  addActionPoint,
  editActionPoint,
  deleteActionPoint,
} from "../../services/api";
import GoalsContext from "../../services/context/GoalsContext";
import UserContext from '../../services/context/UserContext'

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

export interface ActiveActionPointType {
  goalId: string;
  id: string;
}

export interface ParametersType {
  goalId: string,
  id?: string
}

const GoalsDashboard: React.FC = () => {
  const { userId } = useContext(UserContext)

  const [goals, setGoals] = useState<Array<GoalType>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetGoals = async (userId: string) => {
    const goals = await getGoals(userId);
    setGoals(goals);
  };

  const handleAddGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalTitle: string,
    id: string,
    userId: string
  ) => {
    setIsLoading(true);
    await addGoal(e, goalTitle, id, userId);
    setIsLoading(false);
  };

  const handleDeleteGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string
  ) => {
    setIsLoading(true);
    await deleteGoal(e, goalId);
    setIsLoading(false);
  };

  const handleAddActionPoint = async (
    e: React.FormEvent<HTMLButtonElement>,
    actionPointTitle: string,
    goalId: string,
    actionPointId: string
  ) => {
    setIsLoading(true);
    await addActionPoint(e, actionPointTitle, goalId, actionPointId);
    setIsLoading(false);
  };

  const handleDeleteActionPoint = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string
  ) => {
    setIsLoading(true);
    await deleteActionPoint(e, goalId, id);
    setIsLoading(false);
  };

  const handleEditGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    description: string,
    parameters: ParametersType
  ) => {
    setIsLoading(true);
    await editGoal(e, description, parameters);
    setIsLoading(false);
  };

  const handleSubmitEditGoal = (
    e: React.FormEvent<HTMLButtonElement>,
    description: string,
    parameters: ParametersType
  ) => {
    handleEditGoal(e, description, parameters);
  };

  const handleEditActionPoint = async (
    e: React.FormEvent<HTMLButtonElement>,
    description: string,
    parameters: ParametersType
  ) => {
    setIsLoading(true);
    await editActionPoint(e, description, parameters);
    setIsLoading(false);
  };

  const handleSubmitEditActionPoint = (
    e: React.FormEvent<HTMLButtonElement>,
    description: string,
    parameters: ParametersType
  ) => {
    handleEditActionPoint(e, description, parameters);
  };

  

  useEffect(() => {
    handleGetGoals(userId);
  }, [isLoading, userId]);
  return (
    <GoalsContext.Provider
      value={{
        goals,
        handleGetGoals,
        handleDeleteGoal,
        handleAddActionPoint,
        handleDeleteActionPoint,
        handleSubmitEditActionPoint,
        handleSubmitEditGoal,
      }}
    >
      <Container bgColor={theme.colors.lightBlue} width='85%'>
        <Container bgColor={theme.colors.white} shadow={theme.shadow.normal}>
          <SubHeading>Goals List</SubHeading>
          <FormAddGoal handleAddGoal={handleAddGoal} />
        </Container>
        <GoalsList />
      </Container>
    </GoalsContext.Provider>
  );
};

export default GoalsDashboard;
