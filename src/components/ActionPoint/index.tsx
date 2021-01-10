import React from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteButton, EditButton } from "../Button/styled";
import { Container } from "../Container/styled";

export interface ActionPointType {
  description: string;
  id: string;
  goalId: string;
  handleDeleteActionPoint: any;
  handleEditActionPoint: any;
}
export const ActionPoint: React.FC<ActionPointType> = ({
  description,
  id,
  goalId,
  handleDeleteActionPoint,
  handleEditActionPoint,
}) => {
  return (
    <Container row key={uuidv4()}>
      {description}
      {id}
      <EditButton onClick={(e) => handleEditActionPoint(e, goalId, id, "bb")}>
        Edit action point
      </EditButton>
      <DeleteButton onClick={(e) => handleDeleteActionPoint(e, goalId, id)}>
        Delete action point
      </DeleteButton>
    </Container>
  );
};
