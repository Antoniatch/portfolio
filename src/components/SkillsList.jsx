import { useContext } from "react";
import styled from "styled-components";
import projectSkillsContext from "../context/skillProjects";

import SkillCard from "./SkillCard";

const SkillsList = ({ skills }) => {

    const { projectId, skillProjects, setSkillId } = useContext(projectSkillsContext);

    return (
        <Container>
        {!projectId
            ? skills.map((skill) =>
                    <SkillButton 
                        type='button'  
                        key={skill.id} 
                        onClick={() => setSkillId(skill.id)}
                    >
                        <SkillCard skill={skill} />
                    </SkillButton>)
            : skillProjects
                .filter((skillProject) => skillProject.project_id === parseInt(projectId))
                .map((skillProject) => 
                    <SkillButton 
                        type='button'
                        key={skillProject.skill.id} 
                        onClick={() => setSkillId(skillProject.skill.id)}
                    >
                        <SkillCard skill={skillProject.skill} className='skill'/>
                    </SkillButton>
                )
        }
        </Container>
    );
}

export default SkillsList;

const Container = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
`
const SkillButton = styled.button`
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
`