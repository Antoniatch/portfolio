import styled from "styled-components";

const ProjectCard = ({ project }) => {
    return (
        <Container>
            <Logo src={project.logo} alt={project.name} />
            <h4> {project.name} </h4>
        </Container>
    );
}

export default ProjectCard;

const Container = styled.div`
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    :hover {
        transform: scale(1.1);
        transition: all .5s ease-out;
        width: bold
    }

    h4 {
        text-align: left
    }
`

const Logo = styled.img`
    height: 3rem;
    width: 3rem;
    border: white solid 2px;
    border-radius: 100%;
`