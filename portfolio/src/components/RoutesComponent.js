import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Projects from "../pages/Projects";
import ProjectDisplay from "../pages/ProjectDisplay";
import Experience from "../pages/Experience";

function App() {
  return (
      <Routes>
        <Route path="/Portfolio-react" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
  );
}

export default App;
