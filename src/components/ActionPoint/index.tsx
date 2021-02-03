import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteButton, EditButton } from "../Button/styled";
import { Container } from "../Container/styled";
import { deleteActionPoint } from "../../services/api/index";
import GoalsContext from "../../services/context/GoalsContext";

export interface ActionPointType {
  description: string;
  id: string;
  goalId: string;
}
export const ActionPoint: React.FC<ActionPointType> = ({
  description,
  id,
  goalId,
}) => {
  const { handleSetActiveActionPoint } = useContext(
    GoalsContext
  );
  return (
    <Container row key={uuidv4()}>
      {description}
      {id}
      <EditButton onClick={() => handleSetActiveActionPoint(goalId, id)}>
        Edit action point
      </EditButton>
      <DeleteButton onClick={(e) => deleteActionPoint(e, goalId, id)}>
        Delete action point
      </DeleteButton>
    </Container>
  );
};
