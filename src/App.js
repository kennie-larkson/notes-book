import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Home from "./components/home/Home.js";
import Favorites from "./components/notes/Favorites.js"
import NoteDetail from "./components/notes/NoteDetail.js";
import EditForm from "./components/notes/EditForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Route>
        <Navbar title="KennieNoteBook" />
      </Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/editform/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
