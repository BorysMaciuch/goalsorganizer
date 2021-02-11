import React from "react";
import { Container } from "../../components/Container/styled";
import { theme } from "../../styles";
import { MainHeading, Paragraph } from "../../components/Typography/styled";
import { StyledLink } from "../../components/NavBar/styled";

const Home: React.FC = () => {
  return (
    <Container bgColor={theme.colors.white}>
      <MainHeading>Welcome to Goalsorganizer</MainHeading>
      <Paragraph>
        You can add your goals in{" "}
        <StyledLink to="/goalslist">Goals List</StyledLink> section
      </Paragraph>
      <Paragraph>
        After goal is added, add action points that needs to be adressed to
        accomplish your goal
      </Paragraph>
    </Container>
  );
};

export default Home;
