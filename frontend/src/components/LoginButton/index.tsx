import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SubmitButton } from '../Button/styled'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <SubmitButton onClick={() => loginWithRedirect()}>Log In</SubmitButton>;
};

export default LoginButton;