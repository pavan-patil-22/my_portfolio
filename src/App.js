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
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  // useEffect(() => {
  //   // Disable right-click
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //     toast.error("👎 Developers say NO! Right-click blocked!", {
  //       position: "top-right",
  //     });
  //   };
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // Disable F12, Ctrl+Shift+I/J/C, Ctrl+U
  //   const handleKeyDown = (event) => {
  //     if (
  //       event.key === "F12" ||
  //       (event.ctrlKey &&
  //         event.shiftKey &&
  //         (event.key === "I" || event.key === "J" || event.key === "C")) ||
  //       (event.ctrlKey && event.key === "U")
  //     ) {
  //       event.preventDefault();
  //       toast.error("😎 Nice try bro, but I’m also a developer!", {
  //         position: "top-right",
  //       });
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Project />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
