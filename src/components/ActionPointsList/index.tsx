import React from "react";
import { theme } from "../../styles";
import { ActionPoint } from "../ActionPoint";
import { Container } from "../Container/styled";

export interface ActionPointsListType {
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
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
export const ActionPointsList: React.FC<ActionPointsListType> = ({
  actionPoints,
  goalId,
  handleEditActionPoint
}) => {
  return (
    <Container bgColor={theme.colors.white}>
      {actionPoints.map((actionPoint) => (
        <Container>
          <ActionPoint
            description={actionPoint.description}
            id={actionPoint._id}
            goalId={goalId}
            handleEditActionPoint={handleEditActionPoint}
          />
        </Container>
      ))}
    </Container>
  );
};
