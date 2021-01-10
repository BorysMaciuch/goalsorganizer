import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from './pages/ErrorPage'
import GoalsDashboard from './pages/GoalsDashboard'
import NavBar from './components/NavBar'
import { GlobalStyles } from "./styles/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/goalslist" component={GoalsDashboard}/>
      <Route component={ErrorPage}/>

    </Switch>
    </>
    </ThemeProvider>
  );
};

export default App;
