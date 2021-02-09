import React from "react";

const UserContext = React.createContext<AppContextInterface>({ userId: "" });

interface AppContextInterface {
  userId: string;
}

export default UserContext;
