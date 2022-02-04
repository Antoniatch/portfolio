import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProjectPresentation from "../components/ProjectPresentation";
import Screenshots from "../components/Screenshots";
import SimpleSkillsContainer from "../components/SimpleSkillsContainer";

import Page from "../styled-components/Page";

const Project = ({ projects }) => {
    const { id } = useParams();
    const project = projects[id-1];

    return (
        <Page>
            <ProjectPresentation project={project} />
            <Container>
                <ScreenContainer>
                    {project.screenshots.map((screen) => <Screenshots image={screen} />)}
                </ScreenContainer>
                <SimpleSkillsContainer id={project.id} />
            </Container>
            <Link href={project.link} target='_blank' rel="noopener noreferrer"> <h4> Accéder au site </h4> </Link>
        </Page>
    );
}

export default Project;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const ScreenContainer = styled.div`
    width: 40%;
    flex-direction: column;
    margin: 0 2rem;
`
const Link = styled.a`
    text-decoration: none;
    color: #7bdcb5;
    padding: 10rem;
`