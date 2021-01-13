import React from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteButton, EditButton } from "../Button/styled";
import { Container } from "../Container/styled";
import { editActionPoint, deleteActionPoint } from "../../services/api/index";

export interface ActionPointType {
  description: string;
  id: string;
  goalId: string;
  handleSetActiveActionPoint: (goalId: string, id: string) => void;
}
export const ActionPoint: React.FC<ActionPointType> = ({
  description,
  id,
  goalId,
  handleSetActiveActionPoint,
}) => {
  return (
    <Container row key={uuidv4()}>
      {description}
      {id}
      <EditButton onClick={(e) => handleSetActiveActionPoint(goalId, id)}>
        Edit action point
      </EditButton>
      <DeleteButton onClick={(e) => deleteActionPoint(e, goalId, id)}>
        Delete action point
      </DeleteButton>
    </Container>
  );
};
