import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProjectPresentation from "../components/ProjectPresentation";
import SimpleSkillsContainer from "../components/SimpleSkillsContainer";
import Screenshot from '../components/Screenshot';
import getProjects from "../data/projects";

import Page from "../styled-components/Page";
import GoToSite from '../components/GoToSite';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [ project, setProject ] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        getProjects(setProjects);
    }, []);
    
    useEffect(() => {
        setProject(projects[id-1]);        
    }, [projects, id])
    
    if (project) {
        return (
            <Page position='relative'>
                <ProjectPresentation project={project} />
                <Container>
                    <ScreenContainer>
                        {project.screenshots.map((screen) =>
                            <Screenshot screen={screen} />
                        )}
                    </ScreenContainer>
                    <Rightside>
                        <SimpleSkillsContainer id={project.id} />
                        <GoToSite link={project.link} />
                    </Rightside>
                </Container>
            </Page>
        );
    } else {
        return null
    }
}

export default Project;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const ScreenContainer = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    margin: 0 2rem;
`
const Rightside = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;    
`