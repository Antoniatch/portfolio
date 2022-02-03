import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import getProjects from './data/projects';
import getSkills from './data/skills';

function App() {

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([])

  useEffect(() => {
    getProjects(setProjects);
    getSkills(setSkills)
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header projects={projects} />

      <Routes>
        <Route path='/' element={<Home skills={skills} projects={projects} />} />
        <Route path='/:id' element={<Project/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
