import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import GoalsDashboard from "./pages/GoalsDashboard";
import NavBar from "./components/NavBar";
import { GlobalStyles } from "./styles/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/index";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "./services/context/UserContext";

const App = () => {
  const user = { username: "dummyuser" };
  return (
    <ThemeProvider theme={theme}>
      <>
        <UserContext.Provider value={user}>
          <GlobalStyles />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/goalslist" component={GoalsDashboard} />
            <Route component={ErrorPage} />
          </Switch>
        </UserContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
