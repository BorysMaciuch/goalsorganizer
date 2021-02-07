import styled from 'styled-components'

interface TypographyProps {
    color?: string
}

export const MainHeading = styled.h1<TypographyProps>`
    color: ${({ color, theme }) => color ? color : theme.colors.main};

`

export const SubHeading = styled.h3<TypographyProps>`
    padding: 10px;
`

export const Paragraph = styled.p<TypographyProps>`
    color: ${({ color, theme }) => color ? color : theme.colors.main};
    

`