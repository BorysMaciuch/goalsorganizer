import React from "react";

const UserContext = React.createContext<AppContextInterface>({ userId: "b" });

interface AppContextInterface {
  userId: string;
}

export default UserContext;
