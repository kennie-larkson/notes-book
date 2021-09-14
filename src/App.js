import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar.js"
import './App.css';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route>
          <Navbar/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
