import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import projectSkillsContext from './context/skillProjects';

import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import getProjects from './data/projects';
import getSkills from './data/skills';
import getProjectSkills from './data/project-skills';

function App() {

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skillProjects, setSkillProjects] = useState([])
  const [skillId, setSkillId] = useState(null);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    getProjects(setProjects);
    getSkills(setSkills);
    getProjectSkills(setSkillProjects);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header projects={projects} />

      <projectSkillsContext.Provider value={{skillProjects, skillId, setSkillId, projectId, setProjectId}} >
        <Routes>
          <Route path='/' element={<Home skills={skills} projects={projects} />} />
          <Route path='/:id' element={<Project projects={projects} skillProjects={skillProjects} />} />
        </Routes>
      </projectSkillsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
