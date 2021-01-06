import React from "react";
import FormAddActionPoint from "../../components/FormAddActionPoint/script";
import { Button } from "../../components/Button/script";
import { ActionPointsList } from "../ActionPointsList/script";

export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
  handleDeleteActionPoint: any;
  handleEditActionPoint: any;
  handleDeleteGoal: any;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}
export const Goal: React.FC<GoalType> = ({
  title,
  goalId,
  actionPoints,
  handleDeleteActionPoint,
  handleEditActionPoint,
  handleDeleteGoal,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <FormAddActionPoint id={goalId} />
      <ActionPointsList
        actionPoints={actionPoints}
        goalId={goalId}
        handleDeleteActionPoint={handleDeleteActionPoint}
        handleEditActionPoint={handleEditActionPoint}
      />

      <Button variant="edit">Edit</Button>
      <Button variant="delete" onClick={(e) => handleDeleteGoal(e, goalId)}>
        Delete
      </Button>
    </>
  );
};
