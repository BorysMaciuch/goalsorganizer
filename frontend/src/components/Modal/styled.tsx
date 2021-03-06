import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.normal};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.normal};
    padding: 30px;
    z-index: 99;
`;

export const GrayBg = styled.div`
    position:fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(51,51,51,0.7);
    z-index: 98;
`
