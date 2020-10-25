import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./home/script";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default App;
