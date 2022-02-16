import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import MyNavbar from './components/MyNavbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <MyNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
