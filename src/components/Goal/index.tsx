import React, { useContext } from "react";
import FormAddActionPoint from "../Form/FormAddActionPoint";
import { EditButton, DeleteButton } from "../Button/styled";
import { ActionPointsList } from "../ActionPointsList";
import { Container } from "../Container/styled";
import { theme } from "../../styles";
import GoalsContext from "../../services/context/GoalsContext";

export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}

export const Goal: React.FC<GoalType> = ({ title, goalId, actionPoints }) => {
  const { handleDeleteGoal } = useContext(GoalsContext);
  return (
    <Container bgColor={theme.colors.white} shadow={theme.shadow.normal}>
      <h3>{title}</h3>
      <FormAddActionPoint id={goalId} />
      <ActionPointsList />
      <Container row>
        <EditButton>Edit</EditButton>
        <DeleteButton onClick={async (e) => await handleDeleteGoal(e, goalId)}>
          Delete
        </DeleteButton>
      </Container>
    </Container>
  );
};
