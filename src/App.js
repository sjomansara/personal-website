import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/PortfolioPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <Router>
    <MyNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={PortfolioPage} />
      </Switch>
    </Router>
  );
}

export default App;
