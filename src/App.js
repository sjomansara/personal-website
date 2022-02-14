import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
