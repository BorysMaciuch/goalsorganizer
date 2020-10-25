import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/script";
import ErrorPage from './pages/ErrorPage/script'
import GoalsList from './pages/GoalsList/script'
import NavBar from './components/NavBar/script'

const App = () => {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/goalslist" component={GoalsList}/>
      <Route component={ErrorPage}/>

    </Switch>
    </>
  );
};

export default App;
