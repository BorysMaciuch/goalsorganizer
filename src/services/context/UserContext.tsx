import React from "react";

const UserContext = React.createContext<AppContextInterface>({ username: "" });

interface AppContextInterface {
  username: string;
}

export default UserContext;
