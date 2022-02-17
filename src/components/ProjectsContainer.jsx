import { useContext, useState } from "react";
import styled from "styled-components";
import projectSkillsContext from "../context/skillProjects";

import Title from "../styled-components/Title";
import HomeCard from "../styled-components/HomeCard";
import RawButton from "../styled-components/RawButton";
import ProjectCard from "./ProjectCard";



const ProjectsContainer = ({ projects }) => {
    const {skillId, setSkillId, skillProjects, setProjectId } = useContext(projectSkillsContext);

    return (
        <HomeCard>
            <Title>
                <h3> Mes projets </h3>
                { skillId && 
                    <CancelButton type='button' onClick={() => setSkillId(null)}>
                        <img src="../resources/close.png" alt="Close" height='25px'/>
                    </CancelButton> 
                }
            </Title>
            <ProjectsList>
                {!skillId
                    ? projects.map((project) => 
                        <RawButton 
                            type='button'
                            key={project.id} onClick={() => setProjectId(project.id)}>
                            <ProjectCard project={project} key={project.id} />
                        </RawButton>
                    )
                    : skillProjects
                        .filter((skillProject) => skillProject.skill_id === parseInt(skillId))
                        .map((skillProject) => 
                        <RawButton type='button'  key={skillProject.project_id} onClick={() => setProjectId(skillProject.project_id)}>
                            <ProjectCard project={skillProject.project} key={skillProject.project_id} />
                        </RawButton>
                )}
            </ProjectsList>
        </HomeCard>
    );
}

export default ProjectsContainer;

const ProjectsList = styled.div`
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
`

const CancelButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`