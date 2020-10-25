import React, { ButtonHTMLAttributes, useState } from "react";
import {Goal} from '../../pages/GoalsList/script'

export interface FormAddGoal {
    addGoal: (goal: Goal) => void
}

const FormAddGoal: React.FC<FormAddGoal> = ({addGoal}) => {

  const [goalTitle, setGoalTitle] = useState("");
  const handleChangeGoalTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGoalTitle(e.target.value);
  };
  const handleSubmitGoal = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
    addGoal({title: goalTitle})
    setGoalTitle('')
  }
  return (
    <form>
      <label>Goal title</label>
      <input value={goalTitle} onChange={handleChangeGoalTitle} placeholder="Goal title..." />
      <button onClick={handleSubmitGoal}>Submit</button>
    </form>
  );
};

export default FormAddGoal;
