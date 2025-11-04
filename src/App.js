import { Route, Routes } from "react-router-dom";
import "./App.css";
import GuestLayout from "./GuestLayout/GuestLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import ProjectDetails from "./Pages/ProjectDetails";
import Contact from "./Pages/Contact";
import ExperienceDetails from "./Pages/ExperienceDetails";
import Project from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Project/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
