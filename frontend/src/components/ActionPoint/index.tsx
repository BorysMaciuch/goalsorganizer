import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteButton, EditButton } from "../Button/styled";
import { Container } from "../Container/styled";
import GoalsContext from "../../services/context/GoalsContext";
import GoalContext from "../../services/context/GoalContext";
import EditIcon from '../../assets/edit.svg'
import DeleteIcon from '../../assets/delete.svg'
import { Modal } from '../../components/Modal'
import { GrayBg } from '../../components/Modal/styled'

export interface ActionPointType {
  description: string;
  id: string;
}
export const ActionPoint: React.FC<ActionPointType> = ({ description, id }) => {
  const { handleDeleteActionPoint, handleSubmitEditActionPoint } = useContext(
    GoalsContext
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { goalId } = useContext(GoalContext);

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
              parameters={{ goalId, id}}
              title="Edit action point"
              handleSubmitEdit={handleSubmitEditActionPoint}
              handleCloseModal={handleCloseModal}
            />
            <GrayBg />
          </>
        ) : null}
    <Container row key={uuidv4()}>
      {description}
      <EditButton onClick={handleOpenModal} title='Edit action point description'>
        <img src={EditIcon} width="20px" height="20px" alt="Edit Button" />
      </EditButton>
      <DeleteButton onClick={(e) => handleDeleteActionPoint(e, goalId, id)} title='Delete action point'>
        <img src={DeleteIcon} width="20px" height="20px" alt="Delete Button" />
      </DeleteButton>
    </Container>
    </>
  );
};
