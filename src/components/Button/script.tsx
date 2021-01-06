import React from 'react'
import { StyledButton } from './styled'

interface ButtonType {
    variant: string;
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void
}
export const Button: React.FC<ButtonType> = ({children, onClick}) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}