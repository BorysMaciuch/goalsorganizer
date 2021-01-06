import React from "react";
import { ActionPoint } from "../ActionPoint/script";

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
    <div>
      {actionPoints.map((actionPoint) => (
        <ActionPoint
          description={actionPoint.description}
          id={actionPoint._id}
          handleDeleteActionPoint={handleDeleteActionPoint}
          handleEditActionPoint={handleEditActionPoint}
          goalId={goalId}
        />
      ))}
    </div>
  );
};
