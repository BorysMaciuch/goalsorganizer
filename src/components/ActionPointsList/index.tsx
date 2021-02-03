import React from "react";
import { theme } from "../../styles";
import { ActionPoint } from "../ActionPoint";
import { Container } from "../Container/styled";
import { v4 as uuidv4 } from "uuid";

export interface ActionPointsListType {
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}
export const ActionPointsList: React.FC<ActionPointsListType> = ({
  actionPoints,
  goalId,
}) => {
  return (
    <Container bgColor={theme.colors.white}>
      {actionPoints.map((actionPoint) => (
        <Container key={uuidv4()}>
          <ActionPoint
            description={actionPoint.description}
            id={actionPoint._id}
            goalId={goalId}
          />
        </Container>
      ))}
    </Container>
  );
};
