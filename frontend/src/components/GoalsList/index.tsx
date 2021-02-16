import React, { useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "../Goal";
import GoalsContext from "../../services/context/GoalsContext";
import GoalContext from "../../services/context/GoalContext";
import { Container } from "../Container/styled";

const GoalsList: React.FC = () => {
  const { goals } = useContext(GoalsContext);

  return (
    <Container row wrap padding='0px'>
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
    </Container>
  );
};

export default GoalsList;
