import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteButton, EditButton } from "../Button/styled";
import { Container } from "../Container/styled";
import { deleteActionPoint } from "../../services/api/index";
import GoalsContext from "../../services/context/GoalsContext";
import GoalContext from "../../services/context/GoalContext";
import EditIcon from '../../assets/edit.svg'
import DeleteIcon from '../../assets/delete.svg'

export interface ActionPointType {
  description: string;
  id: string;
}
export const ActionPoint: React.FC<ActionPointType> = ({ description, id }) => {
  const { handleSetActiveActionPoint, handleDeleteActionPoint } = useContext(
    GoalsContext
  );
  const { goalId } = useContext(GoalContext);
  return (
    <Container row key={uuidv4()}>
      {description}
      <EditButton onClick={() => handleSetActiveActionPoint(goalId, id)}>
        <img src={EditIcon} width="20px" height="20px" alt="Edit Button" />
      </EditButton>
      <DeleteButton onClick={(e) => handleDeleteActionPoint(e, goalId, id)}>
        <img src={DeleteIcon} width="20px" height="20px" alt="Delete Button" />
      </DeleteButton>
    </Container>
  );
};
