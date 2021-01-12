import React from "react";
import { InputStyled } from "../../components/Form/Input/styled";
import { ModalStyled } from "./styled";
import { RelativeContainer } from "../Container/styled";
import { SubmitButton } from "../../components/Button/styled";

interface ModalType {
  title: string;
}
export const Modal: React.FC<ModalType> = ({ title }) => {
  return (
    <RelativeContainer>
      <ModalStyled>
        <h4>{title}</h4>
        <InputStyled placeholder="New description..." />
        <SubmitButton>Submit</SubmitButton>
      </ModalStyled>
    </RelativeContainer>
  );
};
