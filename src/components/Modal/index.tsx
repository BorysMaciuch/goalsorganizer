import React, { useState } from "react";
import { InputStyled } from "../../components/Form/Input/styled";
import { ModalStyled } from "./styled";
import { RelativeContainer } from "../Container/styled";
import { DeleteButton, SubmitButton } from "../../components/Button/styled";
import {ActiveActionPointType} from '../../pages/GoalsDashboard/index'


interface ModalType {
  title: string;
  activeActionPoint: ActiveActionPointType
  handleSubmitEditActionPoint: (e: React.FormEvent<HTMLButtonElement>, goalId: string, id: string, description: string) => void;
  handleCloseModal: (e: React.FormEvent<HTMLButtonElement>) => void;
}
export const Modal: React.FC<ModalType> = ({ title, handleCloseModal, handleSubmitEditActionPoint, activeActionPoint }) => {
  const [actionPointDescription, setActionPointDescription] = useState('')
  const handleActionPointDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setActionPointDescription(e.target.value);
  };
  return (
    <RelativeContainer>
      <ModalStyled>
        <h4>{title}</h4>
        <InputStyled onChange={handleActionPointDescription} placeholder="New description..." />
        <SubmitButton onClick={(e) => handleSubmitEditActionPoint(e, activeActionPoint.goalId, activeActionPoint.id, actionPointDescription)}>Submit</SubmitButton>
        <DeleteButton onClick={(e) => handleCloseModal(e)}>Close</DeleteButton>
      </ModalStyled>
    </RelativeContainer>
  );
};
