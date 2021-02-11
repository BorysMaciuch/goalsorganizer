import React from "react";

const GoalContext = React.createContext<GoalContextInterface>({
  goalId: "",
  actionPoints: [],
});

interface GoalContextInterface {
  goalId: string;
  actionPoints: Array<ActionPointDescription>;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}

export default GoalContext;
