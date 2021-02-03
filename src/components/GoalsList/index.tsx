import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "../Goal";
import UserContext from "../../services/context/UserContext";

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
  }, [handleGetGoals]);

  return (
    <>
      <UserContext.Consumer>
        {(context) =>
          context && (
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
          )
        }
      </UserContext.Consumer>
    </>
  );
};

export default GoalsList;
