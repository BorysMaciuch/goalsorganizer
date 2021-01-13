import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "../Goal";
import { Container } from "../Container/styled";
import { theme } from "../../styles";

interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  _id: string;
}
interface ActionPointDescription {
  description: string;
  _id: string;
}
interface GoalsListType {
  goals: Array<GoalType>;
  handleDeleteGoal: (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string
  ) => Promise<void>;
  handleGetGoals: () => void;
  handleSetActiveActionPoint: (goalId: string, id: string) => void;
}
const GoalsList: React.FC<GoalsListType> = ({
  goals,
  handleDeleteGoal,
  handleGetGoals,
  handleSetActiveActionPoint,
}) => {
  useEffect(() => {
    handleGetGoals();
  }, []);

  return (
    <>
      {goals.map((goal: GoalType) => (
        <Goal
          key={uuidv4()}
          title={goal.title}
          goalId={goal._id}
          actionPoints={goal.actionPoints}
          handleDeleteGoal={handleDeleteGoal}
          handleSetActiveActionPoint={handleSetActiveActionPoint}
        />
      ))}
    </>
  );
};

export default GoalsList;
