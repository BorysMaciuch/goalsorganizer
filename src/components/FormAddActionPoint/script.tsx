import React, { useState } from "react";
import axios from "axios";
import { Button } from '../Button/script'
import { v4 as uuidv4 } from 'uuid'

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
        _id: uuidv4()
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
      <Button variant='submit' onClick={handleSubmitActionPoint}>Submit</Button>
    </form>
  );
};

export default FormAddActionPoint;
