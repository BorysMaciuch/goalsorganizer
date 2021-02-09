import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import GoalsDashboard from "./pages/GoalsDashboard";
import NavBar from "./components/NavBar";
import { GlobalStyles } from "./styles/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/index";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "./services/context/UserContext";

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userId, setUserId] = useState({ userId: "" });
  useEffect(() => {
    (async () => {
      if (user) {
        setUserId({ userId: user.sub });
      }

    })();
  }, [isAuthenticated, user]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <UserContext.Provider value={userId}>
          <GlobalStyles />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/goalslist" component={GoalsDashboard} />
            <Route path="/about" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </UserContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
