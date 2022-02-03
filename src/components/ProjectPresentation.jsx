import styled from "styled-components";

const ProjectPresentation = ({ project }) => {
    return (
        <Container>
            <TitleContainer>
                <Picture src={project.logo} alt="icon" />
                <NameDiv>
                    <h1> {project.name} </h1>
                </NameDiv>
            </TitleContainer>
            <p> {project.description} </p>
        </Container>
    );
}

export default ProjectPresentation;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    p {
        margin-left: 2rem;
        margin-top: 3rem;
    }
`
const TitleContainer = styled.div`
    display: flex;
`
const Picture = styled.img`
    height: 5rem;
    width: 5rem;
    border: yellow solid 2px;
    border-radius: 100%;
    background-color: white;
    margin: 0 2rem;
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: bold
    }
`