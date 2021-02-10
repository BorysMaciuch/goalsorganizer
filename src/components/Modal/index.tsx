import React, { useState } from "react";
import { InputStyled } from "../../components/Form/Input/styled";
import { ModalStyled } from "./styled";
import { DeleteButton, SubmitButton } from "../../components/Button/styled";
import { SubHeading } from '../Typography/styled'
import { ParametersType } from '../../pages/GoalsDashboard/index'

interface ModalType {
  title: string;
  parameters: ParametersType;
  handleCloseModal: () => void
  handleSubmitEdit: (e: React.FormEvent<HTMLButtonElement>, description: string, parameters: ParametersType ) => void;
}
export const Modal: React.FC<ModalType> = ({ title, handleSubmitEdit, handleCloseModal, parameters }) => {
  const [description, setDescription] = useState('')

  const handleActionPointDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(e.target.value);
  };
  console.log(parameters)
  return (
      <ModalStyled>
        <SubHeading>{title}</SubHeading>
        <InputStyled onChange={handleActionPointDescription} placeholder="New description..." />
        <SubmitButton onClick={(e) => handleSubmitEdit(e, description, parameters)}>Submit</SubmitButton>
        <DeleteButton onClick={handleCloseModal}>Close</DeleteButton>
      </ModalStyled>
  );
};
