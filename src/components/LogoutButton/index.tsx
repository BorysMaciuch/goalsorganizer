import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SubmitButton } from '../Button/styled'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <SubmitButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </SubmitButton>
  );
};

export default LogoutButton;