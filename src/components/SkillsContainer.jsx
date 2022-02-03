import styled from "styled-components";
import Title from "../styled-components/Title";
import HomeCard from "../styled-components/HomeCard";

const SkillsContainer = ({ skills }) => {
    return (
        <HomeCard>
            <Title>
                <h3> Technologies </h3>
            </Title>
            <SkillsList>
                {skills.map((skill) =>
                        <h4 key={skill.id}> {skill.name} </h4>
                    )}
            </SkillsList>
        </HomeCard>
    );
}

export default SkillsContainer;

const SkillsList = styled.div`
    margin: 2rem 0;
`