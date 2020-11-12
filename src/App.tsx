import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/script";
import ErrorPage from './pages/ErrorPage/script'
import GoalsList from './pages/GoalsList/script'
import NavBar from './components/NavBar/script'
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
      <Route path="/goalslist" component={GoalsList}/>
      <Route component={ErrorPage}/>

    </Switch>
    </>
    </ThemeProvider>
  );
};

export default App;
