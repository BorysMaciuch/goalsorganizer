import React, { ButtonHTMLAttributes, useState } from "react";
import {ActionPoint, ActionPointDescription} from '../../pages/GoalsList/script'

export interface FormAddActionPoint {
    addActionPoint: (actionPoint: ActionPointDescription, title: string) => void
    goalTitle: string;
}

const FormAddActionPoint: React.FC<FormAddActionPoint> = ({addActionPoint, goalTitle}) => {

  const [actionPoint, setActionPoint] = useState("");
  const handleChangeActionPoint = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setActionPoint(e.target.value);
  };
  const handleSubmitActionPoint = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      addActionPoint({description: actionPoint}, goalTitle)
    setActionPoint('')
  }
  return (
    <form>
      <label>Action point description</label>
      <input value={actionPoint} onChange={handleChangeActionPoint} placeholder="Action point description..." />
      <button onClick={handleSubmitActionPoint}>Submit</button>
    </form>
  );
};

export default FormAddActionPoint;