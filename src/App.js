import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";

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
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
