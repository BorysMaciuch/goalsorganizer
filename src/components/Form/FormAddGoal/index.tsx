import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { SubmitButton } from "../../Button/styled";
import { FormStyled } from "../styled";
import { InputStyled } from "../Input/styled";
import { LabelStyled } from "../Label/styled";
import { RelativeContainer } from "../../Container/styled";
import { addGoal } from '../../../services/api'

const FormAddGoal: React.FC = () => {
  const [goalTitle, setGoalTitle] = useState("");
  const handleChangeGoalTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGoalTitle(e.target.value);
  };

  
  const handleSubmitGoal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGoalTitle("");
    addGoal(e, goalTitle, uuidv4());
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
