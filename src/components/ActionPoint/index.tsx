import React from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteButton, EditButton } from "../Button/styled";
import { Container } from "../Container/styled";
import { editActionPoint, deleteActionPoint } from "../../services/api/index";

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
  return (
    <Container row key={uuidv4()}>
      {description}
      {id}
      <EditButton onClick={(e) => editActionPoint(e, goalId, id, "bb")}>
        Edit action point
      </EditButton>
      <DeleteButton onClick={(e) => deleteActionPoint(e, goalId, id)}>
        Delete action point
      </DeleteButton>
    </Container>
  );
};
