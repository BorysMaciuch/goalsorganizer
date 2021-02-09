import React from "react";
import LoginButton from "../LoginButton/index";
import LogoutButton from "../LogoutButton/index";
import { NavBarStyled, StyledLink, NavBarItemContainer } from "./styled";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <NavBarStyled>
      <NavBarItemContainer>
        <NavBarItemContainer>
          <StyledLink to="/">Home</StyledLink>
        </NavBarItemContainer>
        <NavBarItemContainer>
          <StyledLink to="/goalslist">Goals List</StyledLink>
        </NavBarItemContainer>
        <NavBarItemContainer>
          <StyledLink to="/about">About</StyledLink>
        </NavBarItemContainer>
      </NavBarItemContainer>
      <NavBarItemContainer>
        {isAuthenticated ? (
          <NavBarItemContainer>
            <div>{user.email}</div>
            <LogoutButton />{" "}
          </NavBarItemContainer>
        ) : (
          <LoginButton />
        )}
      </NavBarItemContainer>
    </NavBarStyled>
  );
};

export default NavBar;
