import React, { useState } from "react";
import axios from "axios";

export interface FormAddActionPointType {
  id: string;
}

const FormAddActionPoint: React.FC<FormAddActionPointType> = ({ id }) => {
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
