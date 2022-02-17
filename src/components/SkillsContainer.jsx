import { useContext } from "react";

import styled from "styled-components";
import Title from "../styled-components/Title";
import HomeCard from "../styled-components/HomeCard";
import SkillsList from "./SkillsList";
import projectSkillsContext from "../context/skillProjects";

const SkillsContainer = ({ skills }) => {

    const { projectId, setProjectId } = useContext(projectSkillsContext);

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
            <SkillsList skills={skills} />
        </HomeCard>
    );
}

export default SkillsContainer;

const CancelButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`