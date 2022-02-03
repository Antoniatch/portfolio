import styled from "styled-components";

const ProjectCard = ({ project }) => {
    return (
        <Container>
            <Logo src={project.logo} alt={project.name} />
            <h3>  </h3>
        </Container>
    );
}

export default ProjectCard;

const Container = styled.div`
    display: flex;
`

const Logo = styled.img`
    height: 3rem;
    width: 3rem;
    border: white solid 2px;
    border-radius: 100%;
`