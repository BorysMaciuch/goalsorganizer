import React, { useContext } from "react";
import { theme } from "../../styles";
import { ActionPoint } from "../ActionPoint";
import { Container } from "../Container/styled";
import { v4 as uuidv4 } from "uuid";
import GoalContext from "../../services/context/GoalContext";

export const ActionPointsList: React.FC = () => {
  const { actionPoints } = useContext(GoalContext);

  return (
    <Container bgColor={theme.colors.white}>
      {actionPoints.map((actionPoint) => (
        <Container key={uuidv4()}>
          <ActionPoint
            description={actionPoint.description}
            id={actionPoint._id}
          />
        </Container>
      ))}
    </Container>
  );
};
