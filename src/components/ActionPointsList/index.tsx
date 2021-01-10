import React from "react";
import { theme } from "../../styles";
import { ActionPoint } from "../ActionPoint";
import { Container } from "../Container/styled";

export interface ActionPointsListType {
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
  handleDeleteActionPoint: any;
  handleEditActionPoint: any;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}
export const ActionPointsList: React.FC<ActionPointsListType> = ({
  actionPoints,
  goalId,
  handleDeleteActionPoint,
  handleEditActionPoint,
}) => {
  return (
    <Container bgColor={theme.colors.white}>
      {actionPoints.map((actionPoint) => (
        <Container>
          <ActionPoint
            description={actionPoint.description}
            id={actionPoint._id}
            handleDeleteActionPoint={handleDeleteActionPoint}
            handleEditActionPoint={handleEditActionPoint}
            goalId={goalId}
          />
        </Container>
      ))}
    </Container>
  );
};
