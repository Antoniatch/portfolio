import { useContext } from "react";

import styled from "styled-components";
import Title from "../styled-components/Title";
import HomeCard from "../styled-components/HomeCard";
import projectSkillsContext from "../context/skillProjects";

const SimpleSkillsContainer = ({ id }) => {
    const { skillProjects } = useContext(projectSkillsContext);

    return (
        <HomeCard width='100%'>
            <Title>
                <h3> Technologies </h3>
            </Title>
            <SkillsList>
                {skillProjects
                    .filter(skillProject => skillProject.project_id === parseInt(id))
                    .map((skillProject) => <h4> {skillProject.skill.name} </h4>)
                }
            </SkillsList>
        </HomeCard>
    );
}

export default SimpleSkillsContainer;

const SkillsList = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    h4 {
        margin: .5rem 2rem
    }
`