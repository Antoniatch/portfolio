import { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";

import styled from "styled-components";

import getProjects from "../data/projects";
import getSkills from "../data/skills";

import Page from "../styled-components/Page";

import Name from "../components/Name";
import Presentation from "../components/Presentation";
import SkillsContainer from "../components/SkillsContainer";
import ProjectsContainer from "../components/ProjectsContainer";

import authContext from "../context/authContext";

const Home = () => {

    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
      getProjects(setProjects);
      getSkills(setSkills);
    }, []);


    const { setIsConnected } = useContext(authContext);

    useEffect(() => {
        setIsConnected(false)
    }, []);

    return (
        <Page>
            <Name />
            <Presentation />
            <Container>
                <SkillsContainer skills={skills} />
                <ProjectsContainer projects={projects} />
            </Container>
        </Page>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`