import styled from "styled-components";

import Page from "../styled-components/Page";
import Name from "../components/Name";
import Presentation from "../components/Presentation";
import SkillsContainer from "../components/SkillsContainer";
import ProjectsContainer from "../components/ProjectsContainer";

const Home = ({ skills, projects }) => {
    return (
        <>
        <Page>
            <Name />
            <Presentation />
            <Container>
                <SkillsContainer skills={skills} />
                <ProjectsContainer projects={projects} />
            </Container>
        </Page>
        </>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`