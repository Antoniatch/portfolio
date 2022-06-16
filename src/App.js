import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import projectSkillsContext from './context/skillProjects';
import authContext from './context/authContext';

import Home from "./pages/Home";
import Project from "./pages/Project";
import Login from './pages/Login';
import AddProject from './pages/AddProject';
import AddProjectSkills from './pages/AddProjectSkills';
import AddSkill from './pages/AddSkill';
import Delete from './pages/Delete';

import Header from './components/Header';
import Footer from './components/Footer';


import getProjects from './data/projects';
import getProjectSkills from './data/project-skills';

import GlobalStyle from './globalStyles';
// import PrivateRoute from './auth/PrivateRoute';


function App() {

  const [projects, setProjects] = useState([]);
  const [skillProjects, setSkillProjects] = useState([]);
  
  const [skillId, setSkillId] = useState(null);
  const [projectId, setProjectId] = useState(null);

  const [isConnected, setIsConnected] = useState(false);


  useEffect(() => {
    getProjects(setProjects);
    getProjectSkills(setSkillProjects);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header projects={projects} />

      <projectSkillsContext.Provider value={{skillProjects, skillId, setSkillId, projectId, setProjectId}} >
      <authContext.Provider value={{ isConnected, setIsConnected}} >

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Project />} />

          <Route path='/login' element={<Login />} />
          <Route path='/new-project' element={<AddProject />} />
          <Route path='/new-skill' element={<AddSkill />} />
          <Route path='/new-project-skills' element={<AddProjectSkills />} />
          <Route path='/delete' element={<Delete />} />

        </Routes>
      </authContext.Provider>
      </projectSkillsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
