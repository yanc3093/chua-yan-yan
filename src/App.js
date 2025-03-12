import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Resume from "./component/resume";
import Projects from "./component/projects";
import Contact from "./component/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
