import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Resume from "./component/resume";
import Projects from "./component/projects";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const collapseExpanded = () => {
    setIsExpanded(false);
  };
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar
          isMobile={isMobile}
          isExpanded={isExpanded}
          handleClick={handleClick}
          collapseExpanded={collapseExpanded}
        />
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/resume" element={<Resume isMobile={isMobile} />} />
          <Route path="/projects" element={<Projects isMobile={isMobile} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer collapseExpanded={collapseExpanded} />
      </div>
    </Router>
  );
}

export default App;
