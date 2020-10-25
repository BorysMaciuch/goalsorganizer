import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/script";
import ErrorPage from './pages/ErrorPage/script'

const App = () => {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={ErrorPage}/>
    </Switch>
    </>
  );
};

export default App;
