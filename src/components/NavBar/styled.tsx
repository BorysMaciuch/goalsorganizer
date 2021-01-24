import styled from 'styled-components'

export const NavBarStyled = styled.div`
    display: flex;
    flex-direction: 'row',
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.normal};
    @media (max-width: 1500px) {
        flex-direction: column;
    }
    
`
