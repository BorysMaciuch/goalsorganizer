import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  border-radius: ${({ theme }) => theme.radius.button};
  padding: 12px 18px;
  border: 0;
  margin: 12px;
  box-shadow: 0 6px 30px -10px #4a74c9;
  color: ${({ theme }) => theme.colors.lightBlue};
  transition: all 0.5s ease;
  &:hover {
    transform: scale(0.95);
  }
`;
export const SubmitButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.main};

`
export const DeleteButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.delete}
`

export const EditButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.edit}
`