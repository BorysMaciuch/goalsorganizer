import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.normal};
    @media (max-width: 1500px) {
        flex-direction: column;
    }
`
export const StyledLink = styled(Link)`
    padding: 2px 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
    &:hover {
        font-weight: bold;        
    }


`

export const NavBarItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 10px;
    text-decoration: none;
    background 
    color: ${({ theme }) => theme.colors.main};
`