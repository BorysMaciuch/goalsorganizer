import React from "react";

const GoalsContext = React.createContext<GoalsContextInterface>({
  goals: [{ title: "", actionPoints: [], _id: "" }],
  handleGetGoals: () => null,
  handleDeleteGoal: async () => {},
  handleSetActiveActionPoint: () => null,
  handleAddActionPoint: () => null,
});

interface GoalsContextInterface {
  goals: Array<GoalType>;
  handleGetGoals: () => void;
  handleDeleteGoal: (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string
  ) => Promise<void>;
  handleSetActiveActionPoint: (goalId: string, id: string) => void;
  handleAddActionPoint: (e: React.FormEvent<HTMLButtonElement>, actionPointTitle: string, id: string) => void
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
