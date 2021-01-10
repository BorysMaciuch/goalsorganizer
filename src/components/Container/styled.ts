import styled from 'styled-components'
interface ContainerProps {
    row?: boolean;
    shadow?: string;
    bgColor?: string;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 10px auto;
    padding: 12px;
    border-radius: ${({ theme }) => theme.radius.normal};
    background-color: ${({ bgColor }) => bgColor ? bgColor : 'none'};
    box-shadow: ${({ shadow }) => shadow ? shadow : 'none'};
    @media (max-width: 1500px) {
        flex-direction: column;
    }
    
`
export const RelativeContainer = styled.div`
    position: relative;
`