import React from "react";
import { Link } from "react-router-dom";
import LoginButton from '../LoginButton/index'
import LogoutButton from '../LogoutButton/index'
import { NavBarStyled } from './styled'

const NavBar: React.FC = () => {
  return <NavBarStyled>
    <Link to='/'>Home</Link>
    <Link to='/goalslist'>Goals List</Link>
    <LoginButton />
    <LogoutButton />
  </NavBarStyled>;
};

export default NavBar;
