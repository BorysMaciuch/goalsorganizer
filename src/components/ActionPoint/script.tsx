import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button/script";
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
    <div key={uuidv4()}>
      {description}
      {id}
      <Button
        variant="delete"
        onClick={(e) => handleDeleteActionPoint(e, goalId, id)}
      >
        Delete action point
      </Button>
      <Button
        variant="edit"
        onClick={(e) => handleEditActionPoint(e, goalId, id, 'bb')}
      >
        Delete action point
      </Button>
    </div>
  );
};
