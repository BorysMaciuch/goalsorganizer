import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "../Goal";
import GoalsContext from "../../services/context/GoalsContext";
import GoalContext from "../../services/context/GoalContext";

const GoalsList: React.FC = () => {
  const { goals, handleGetGoals } = useContext(GoalsContext);
  useEffect(() => {
    handleGetGoals();
  }, []);
  return (
    <>
      {goals.map((goal) => (
        <GoalContext.Provider
        key={uuidv4()}
        value={{ goalId: goal._id, actionPoints: goal.actionPoints }}
        >
          <Goal
            title={goal.title}
            goalId={goal._id}
            actionPoints={goal.actionPoints}
          />
        </GoalContext.Provider>
      ))}
    </>
  );
};

export default GoalsList;
