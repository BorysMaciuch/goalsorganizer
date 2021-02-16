import styled from 'styled-components'
interface ContainerProps {
    row?: boolean;
    shadow?: string;
    bgColor?: string;
    width?: string;
    scroll?: boolean;
    height?: string;
    wrap?: boolean;
    padding?: string;
    justify?: string;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-wrap: ${({wrap}) =>  wrap ? 'wrap' : 'nowrap'};
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({justify}) => justify ? justify : 'center'};
    margin: 10px auto;
    padding: ${({padding}) => padding ? padding : '2px'};
    border-radius: ${({ theme }) => theme.radius.normal};
    background-color: ${({ bgColor }) => bgColor ? bgColor : 'none'};
    box-shadow: ${({ shadow }) => shadow ? shadow : 'none'};
    width: ${({width}) => width ? width : "80%"};
    height: ${({height}) => height ? height : 'auto'};
    overflow-y: ${({ scroll }) => scroll? 'auto' : 'visible'};
    @media (max-width: 1500px) {
        flex-direction: column;
    }
    @media (max-width: 800px) {
        width: 90%;
        height: 100%;
        overflow-y: none;
    }
    
`
export const RelativeContainer = styled.div`
    min-width: 100px;
    position: relative;
`