import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { SubmitButton } from "../../Button/styled";
import { FormStyled } from "../styled";
import { InputStyled } from "../Input/styled";
import { LabelStyled } from "../Label/styled";
import { RelativeContainer } from "../../Container/styled";

const FormAddGoal: React.FC = () => {
  const [goalTitle, setGoalTitle] = useState("");
  const handleChangeGoalTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGoalTitle(e.target.value);
  };

  const addGoalHandler = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/goals/add-goal", {
        id: uuidv4(),
        title: goalTitle,
        actionPoints: [],
      })
      .catch((err) => console.log(err));
  };
  const handleSubmitGoal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGoalTitle("");
    addGoalHandler(e);
  };
  return (
    <FormStyled>
      <RelativeContainer>
        <LabelStyled>Goal title</LabelStyled>
        <InputStyled
          value={goalTitle}
          onChange={handleChangeGoalTitle}
          placeholder="Goal title..."
        />
      </RelativeContainer>
      <SubmitButton onClick={handleSubmitGoal}>Submit</SubmitButton>
    </FormStyled>
  );
};

export default FormAddGoal;
