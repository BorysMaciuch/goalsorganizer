import React, { useState } from "react";
import axios from "axios";
import { SubmitButton } from "../../Button/styled";
import { v4 as uuidv4 } from "uuid";
import { FormStyled } from "../styled";
import { InputStyled } from "../Input/styled";
import { LabelStyled } from "../Label/styled";
import { RelativeContainer } from "../../Container/styled";

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
        _id: uuidv4(),
      })
      .catch((err) => console.log(err));
  };
  return (
    <FormStyled>
      <RelativeContainer>
        <LabelStyled>Action point description</LabelStyled>
        <InputStyled
          value={actionPoint}
          onChange={handleChangeActionPoint}
          placeholder="Action point description..."
        />
      </RelativeContainer>
      <SubmitButton onClick={handleSubmitActionPoint}>Submit</SubmitButton>
    </FormStyled>
  );
};

export default FormAddActionPoint;
