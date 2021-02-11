import React from 'react'
import { Container } from '../../components/Container/styled'
import { theme } from "../../styles";
import { MainHeading } from '../../components/Typography/styled'
import { Paragraph } from '../../components/Typography/styled'

const Home: React.FC = () => {
    return (
        <Container bgColor={theme.colors.white}>
            <MainHeading>About</MainHeading>
            <Paragraph>Goalsorganizer was designed and built by author, Borys Maciuch</Paragraph>
            <Paragraph>Edit Icon made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Paragraph>
        </Container>
    )
}

export default Home