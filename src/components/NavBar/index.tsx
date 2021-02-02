import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/index";
import LogoutButton from "../LogoutButton/index";
import { NavBarStyled } from "./styled";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <NavBarStyled>
      <Link to="/">Home</Link>
      <Link to="/goalslist">Goals List</Link>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </NavBarStyled>
  );
};

export default NavBar;
