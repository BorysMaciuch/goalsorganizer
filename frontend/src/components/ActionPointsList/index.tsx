import React, { useContext } from "react";
import { theme } from "../../styles";
import { ActionPoint } from "../ActionPoint";
import { Container } from "../Container/styled";
import { v4 as uuidv4 } from "uuid";
import GoalContext from "../../services/context/GoalContext";

export const ActionPointsList: React.FC = () => {
  const { actionPoints } = useContext(GoalContext);

  return (
    <Container bgColor={theme.colors.white} width='100%' scroll height='200px'>
      {actionPoints.map((actionPoint) => (
        <Container key={uuidv4()} width='100%' >
          <ActionPoint
            description={actionPoint.description}
            id={actionPoint._id}
          />
        </Container>
      ))}
    </Container>
  );
};
