import React from "react";
import { ParametersType } from '../../pages/GoalsDashboard'

const GoalsContext = React.createContext<GoalsContextInterface>({
  goals: [{ title: "", actionPoints: [], _id: "" }],
  handleGetGoals: () => null,
  handleDeleteGoal: async () => {},
  handleAddActionPoint: () => null,
  handleDeleteActionPoint: () => null,
  handleSubmitEditActionPoint: () => null,
  handleSubmitEditGoal: () => null
});

interface GoalsContextInterface {
  goals: Array<GoalType>;
  handleGetGoals: (userId: string) => void;
  handleDeleteGoal: (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string
  ) => Promise<void>;
  handleAddActionPoint: (
    e: React.FormEvent<HTMLButtonElement>,
    actionPointTitle: string,
    goalId: string,
    actionPointId: string
  ) => void;
  handleDeleteActionPoint: (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string
  ) => void;
  handleSubmitEditActionPoint: (
    e: React.FormEvent<HTMLButtonElement>,
    description: string,
    parameters: ParametersType
  ) => 
    void;
  handleSubmitEditGoal: (
    e: React.FormEvent<HTMLButtonElement>,
    description: string,
    parameters: ParametersType
  ) => 
    void;
  
}
export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  _id: string;
}

export interface ActionPointDescription {
  description: string;
  _id: string;
}
export default GoalsContext;
