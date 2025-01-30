import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Projects from "../pages/Projects";
import ProjectDisplay from "../pages/ProjectDisplay";
import Experience from "../pages/Experience";

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
