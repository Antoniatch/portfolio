import { useContext } from "react";

import styled from "styled-components";
import Title from "../styled-components/Title";
import HomeCard from "../styled-components/HomeCard";
import projectSkillsContext from "../context/skillProjects";

const SkillsContainer = ({ skills }) => {

    const { projectId, setProjectId, skillProjects, setSkillId } = useContext(projectSkillsContext);

    return (
        <HomeCard>
            <Title>
                <h3> Technologies </h3>
                { projectId && 
                    <CancelButton type='button' onClick={() => setProjectId(null)}>
                        <img src="../resources/close.png" alt="Close" height='25px'/>
                    </CancelButton> 
                }
            </Title>
            <SkillsList>
                {!projectId
                    ? skills.map((skill) =>
                            <SkillButton type='button'  key={skill.id} onClick={() => setSkillId(skill.id)}>
                                <h4> {skill.name} </h4>
                            </SkillButton>)
                    : skillProjects
                        .filter((skillProject) => skillProject.project_id === parseInt(projectId))
                        .map((skillProject) => 
                            <SkillButton type='button'  key={skillProject.skill.id} onClick={() => setSkillId(skillProject.skill.id)}>
                                <h4> {skillProject.skill.name} </h4>
                            </SkillButton>
                        )
                }
            </SkillsList>
        </HomeCard>
    );
}

export default SkillsContainer;

const SkillsList = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
`
const SkillButton = styled.button`
    border: none;
    background-color: transparent;
    color: white;

    h4 {
        padding: .5rem 5rem;
        text-align: justify;
        font-size: 1.5rem;
        font-weight: 100;
        margin: 0;
        font-family: 'Roboto Mono', monospace;

        :hover {
            transform: scale(1.1);
            transition: all .5s ease-out;
            width: bold
        }
    }
`
const CancelButton = styled.button`
    border: none;
    background-color: transparent;
`