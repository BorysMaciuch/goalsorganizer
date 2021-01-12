import React from "react";
import FormAddActionPoint from "../Form/FormAddActionPoint";
import { EditButton, DeleteButton } from "../Button/styled";
import { ActionPointsList } from "../ActionPointsList";
import { Container } from "../Container/styled";
import { theme } from "../../styles";
import { deleteGoal } from "../../services/api";

export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
  handleDeleteGoal: (e: React.FormEvent<HTMLButtonElement>, goalId: string) => Promise<void>;
  handleEditActionPoint: (
    e: React.FormEvent<HTMLButtonElement>,
    goalId: string,
    id: string,
    description: string
  ) => void;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}

export const Goal: React.FC<GoalType> = ({ title, goalId, actionPoints, handleDeleteGoal, handleEditActionPoint }) => {
  return (
    <Container bgColor={theme.colors.white} shadow={theme.shadow.normal}>
      <h3>{title}</h3>
      <FormAddActionPoint id={goalId} />

      <ActionPointsList actionPoints={actionPoints} goalId={goalId} handleEditActionPoint={handleEditActionPoint}  />
      <Container row>
        <EditButton>Edit</EditButton>
        <DeleteButton onClick={(e) => handleDeleteGoal(e, goalId)}>
          Delete
        </DeleteButton>
      </Container>
    </Container>
  );
};
