import React, { useState } from "react";
import FormAddGoal from "../../components/Form/FormAddGoal";
import { Container } from "../../components/Container/styled";
import GoalsList from "../../components/GoalsList";
import { theme } from "../../styles/index";
import {
  getGoals,
  deleteGoal,
  addGoal,
  editActionPoint,
} from "../../services/api";
import { Modal } from "../../components/Modal";
import { GrayBg } from "../../components/Modal/styled";

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

const GoalsDashboard: React.FC = () => {
  const [goals, setGoals] = useState<Array<GoalType>>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeActionPoint, setActiveActionPoint] = useState({
    goalId: "",
    id: "",
  });

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
    setGoals(goals);
  };

  const handleAddGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalTitle: string,
    id: string
  ) => {
    await addGoal(e, goalTitle, id);
    const goals = await getGoals();
    setGoals(goals);
  };
  const handleEditActionPoint = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string,
    description: string
  ) => {
    await editActionPoint(e, goalId, id, description);
    const goals = await getGoals();
    setGoals(goals);
  };
  const handleSetActiveActionPoint = (goalId: string, id: string) => {
    setIsModalVisible(true);
    setActiveActionPoint({ goalId, id });
  };
  const handleCloseModal = (e: React.FormEvent<HTMLButtonElement>) => {
    setIsModalVisible(false);
  };
  const handleSubmitEditActionPoint = (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string,
    description: string
  ) => {
    handleCloseModal(e);

    handleEditActionPoint(e, goalId, id, description);
  };

  return (
    <Container bgColor={theme.colors.lightBlue}>
      {isModalVisible ? (
        <>
          <Modal
            title="Edit action point"
            handleCloseModal={handleCloseModal}
            activeActionPoint={activeActionPoint}
            handleSubmitEditActionPoint={handleSubmitEditActionPoint}
          />
          <GrayBg />
        </>
      ) : null}
      <Container bgColor={theme.colors.white} shadow={theme.shadow.normal}>
        <h1>Goals List</h1>
        <FormAddGoal handleAddGoal={handleAddGoal} />
      </Container>
      <GoalsList
        goals={goals}
        handleDeleteGoal={handleDeleteGoal}
        handleGetGoals={handleGetGoals}
        handleSetActiveActionPoint={handleSetActiveActionPoint}
      />
    </Container>
  );
};

export default GoalsDashboard;
