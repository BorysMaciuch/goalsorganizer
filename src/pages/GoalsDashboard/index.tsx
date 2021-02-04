import React, { useState, useEffect } from "react";
import FormAddGoal from "../../components/Form/FormAddGoal";
import { Container } from "../../components/Container/styled";
import GoalsList from "../../components/GoalsList";
import { theme } from "../../styles/index";
import {
  getGoals,
  addGoal,
  deleteGoal,
  addActionPoint,
  editActionPoint,
  deleteActionPoint
} from "../../services/api";
import { Modal } from "../../components/Modal";
import { GrayBg } from "../../components/Modal/styled";
import GoalsContext from "../../services/context/GoalsContext";

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
  const [isLoading, setIsLoading] = useState(false)
  const [activeActionPoint, setActiveActionPoint] = useState({
    goalId: "",
    id: "",
  });

  const handleGetGoals = async () => {
    const goals = await getGoals();
    setGoals(goals);
  };

  const handleAddGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalTitle: string,
    id: string
  ) => {
    setIsLoading(true)
    await addGoal(e, goalTitle, id);
    setIsLoading(false)
  };

  const handleDeleteGoal = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string
  ) => {
    setIsLoading(true)
    await deleteGoal(e, goalId);
    setIsLoading(false)
  };

  const handleAddActionPoint = async (e: React.FormEvent<HTMLButtonElement>, actionPointTitle: string, id: string ) => {
   setIsLoading(true)
   await addActionPoint(e, actionPointTitle, id)
   setIsLoading(false)
  };
  
  const handleDeleteActionPoint = async(e: React.FormEvent<HTMLButtonElement>, goalId: string, id: string) => {
    setIsLoading(true)
    await deleteActionPoint(e, goalId, id)
    setIsLoading(false)
  }
  const handleEditActionPoint = async (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string,
    description: string
  ) => {
    setIsLoading(true)
    await editActionPoint(e, goalId, id, description);
    setIsLoading(false)
  };

  const handleSetActiveActionPoint = (goalId: string, id: string) => {
    setIsModalVisible(true);
    setActiveActionPoint({ goalId, id });
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

  const handleCloseModal = (e: React.FormEvent<HTMLButtonElement>) => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    handleGetGoals();
  }, [isLoading]);
  
  console.log("rerender");
  return (
    <GoalsContext.Provider
      value={{
        goals,
        handleGetGoals,
        handleDeleteGoal,
        handleSetActiveActionPoint,
        handleAddActionPoint,
         handleDeleteActionPoint
      }}
    >
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
        <GoalsList />
      </Container>
    </GoalsContext.Provider>
  );
};

export default GoalsDashboard;
