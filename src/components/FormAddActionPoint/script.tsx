import React, { ButtonHTMLAttributes, useState } from "react";
import { ActionPointDescription } from "../../pages/GoalsList/script";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export interface FormAddActionPoint {
  id: string;
}

const FormAddActionPoint: React.FC<FormAddActionPoint> = ({ id }) => {
  const [actionPoint, setActionPoint] = useState("");
  const handleChangeActionPoint = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setActionPoint(e.target.value);
  };
  const handleSubmitActionPoint = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/goals/add-goal/${id}`, {
        actionPoints: actionPoint,
      })
      .catch((err) => console.log(err));
  };
  return (
    <form>
      <label>Action point description</label>
      <input
        value={actionPoint}
        onChange={handleChangeActionPoint}
        placeholder="Action point description..."
      />
      <button onClick={handleSubmitActionPoint}>Submit</button>
    </form>
  );
};

export default FormAddActionPoint;
