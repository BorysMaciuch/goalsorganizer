import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "../Goal";
import GoalsContext from "../../services/context/GoalsContext";

const GoalsList: React.FC = () => {
  const { goals, handleGetGoals } = useContext(
    GoalsContext
  );
  useEffect(() => {
    handleGetGoals();
  }, []);
  return (
    <>
      {goals.map((goal) => (
        <Goal
          key={uuidv4()}
          title={goal.title}
          goalId={goal._id}
          actionPoints={goal.actionPoints}
        />
      ))}
    </>
  );
};

export default GoalsList;
