import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import ProjectDisplay from "./ProjectDisplay";
import Experience from "./Experience";

function App() {
  return (
    <Router basename="/Portfolio-react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
