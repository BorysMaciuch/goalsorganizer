import React, { ButtonHTMLAttributes, useState } from "react";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const FormAddGoal: React.FC = () => {

  const [goalTitle, setGoalTitle] = useState("");
  const handleChangeGoalTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGoalTitle(e.target.value);
  };

  const addGoalHandler = (e: any) => {
    e.preventDefault()
    axios
    .post('http://localhost:5000/goals/add-goal', {id: uuidv4(), title: goalTitle, actionPoints: []})
    .catch((err) => console.log(err))

  }
  const handleSubmitGoal = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
    setGoalTitle('')
    addGoalHandler(e)
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
