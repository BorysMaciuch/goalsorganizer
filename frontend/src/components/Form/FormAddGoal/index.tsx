import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SubmitButton } from "../../Button/styled";
import { FormStyled } from "../styled";
import { InputStyled } from "../Input/styled";
import { LabelStyled } from "../Label/styled";
import { RelativeContainer } from "../../Container/styled";
import UserContext from '../../../services/context/UserContext'

interface FormAddGoalType {
  handleAddGoal: (
    e: React.FormEvent<HTMLButtonElement>,
    goalTitle: string,
    id: string,
    userId: string,
  ) => void;
}

const FormAddGoal: React.FC<FormAddGoalType> = ({ handleAddGoal }) => {
  const [goalTitle, setGoalTitle] = useState("");
  const { userId } = useContext(UserContext)
  const handleChangeGoalTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGoalTitle(e.target.value);
  };

  const handleSubmitGoal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGoalTitle("");
    handleAddGoal(e, goalTitle, uuidv4(), userId);
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
