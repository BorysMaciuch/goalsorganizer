import React, { useContext, useState } from "react";
import { SubmitButton } from "../../Button/styled";
import { v4 as uuidv4 } from "uuid";
import { FormStyled } from "../styled";
import { InputStyled } from "../Input/styled";
import { LabelStyled } from "../Label/styled";
import { Container, RelativeContainer } from "../../Container/styled";
import GoalsContext from "../../../services/context/GoalsContext";

export interface FormAddActionPointType {
  id: string;
}

const FormAddActionPoint: React.FC<FormAddActionPointType> = ({ id }) => {
  const [actionPoint, setActionPoint] = useState("");
  const { handleAddActionPoint } = useContext(GoalsContext);

  const handleChangeActionPoint = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setActionPoint(e.target.value);
  };

  const handleSubmitActionPoint = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActionPoint("");
    handleAddActionPoint(e, actionPoint, id, uuidv4());
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
