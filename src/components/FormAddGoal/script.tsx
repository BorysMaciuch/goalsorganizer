import React, { useState } from "react";

const FormAddGoal: React.FC = () => {
  const [goalTitle, setGoalTitle] = useState("");
  const handleChangeGoalTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGoalTitle(e.target.value);
  };
  console.log(goalTitle);
  return (
    <form>
      <label>Goal title</label>
      <input onChange={handleChangeGoalTitle} placeholder="Goal title..." />
      <button>Submit</button>
    </form>
  );
};

export default FormAddGoal;
