import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
