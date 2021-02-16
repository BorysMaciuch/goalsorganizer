import React, { useContext, useState } from "react";
import FormAddActionPoint from "../Form/FormAddActionPoint";
import { EditButton, DeleteButton } from "../Button/styled";
import { ActionPointsList } from "../ActionPointsList";
import { Container } from "../Container/styled";
import { theme } from "../../styles";
import GoalsContext from "../../services/context/GoalsContext";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import { Modal } from '../../components/Modal'
import { GrayBg } from '../../components/Modal/styled'
import { SubHeading } from '../Typography/styled'

export interface GoalType {
  title: string;
  actionPoints: Array<ActionPointDescription>;
  goalId: string;
}
export interface ActionPointDescription {
  description: string;
  _id: string;
}

export const Goal: React.FC<GoalType> = ({ title, goalId }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { handleDeleteGoal, handleSubmitEditGoal} = useContext(GoalsContext);

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }
  return (
    <>
    {isModalVisible ? (
          <>
            <Modal
              parameters={{ goalId }}
              title="Edit goal"
              handleSubmitEdit={handleSubmitEditGoal}
              handleCloseModal={handleCloseModal}
            />
            <GrayBg />
          </>
        ) : null}
    <Container bgColor={theme.colors.white} shadow={theme.shadow.normal} width='500px'>
      <SubHeading>{title}</SubHeading>
      <FormAddActionPoint id={goalId} />
      <ActionPointsList />
      <Container row>
        <EditButton onClick={handleOpenModal}>
          <img src={EditIcon} width="20px" height="20px" alt="Edit Button" />
        </EditButton>
        <DeleteButton onClick={async (e) => await handleDeleteGoal(e, goalId)}>
          <img
            src={DeleteIcon}
            width="20px"
            height="20px"
            alt="Delete Button"
          />
        </DeleteButton>
      </Container>
    </Container>
    </>
  );
};
