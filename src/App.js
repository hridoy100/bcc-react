import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Events from "./components/Events";
import SubjectReview from "./components/SubjectReview";
import Team from "./components/Team";
import Alumni from "./components/Alumni";
import MemberList from "./components/MemberList";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/subject-review">
              <SubjectReview />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/alumni">
              <Alumni />
            </Route>
            <Route path="/member-list">
              <MemberList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
