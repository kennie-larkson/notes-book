import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Home from "./components/home/Home.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Route>
        <Navbar />
      </Route>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
