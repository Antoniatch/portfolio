import { useState } from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {

    const [ showClick, setShowClick ] = useState(false);

    return (
        <Container
            onMouseEnter={() => setShowClick(!showClick)}
            onMouseLeave={() => setShowClick(!showClick)}
        >
            <Logo src={project.logo} alt={project.name} className='project' />
            <Name>
                <h4 className="project"> {project.name} </h4>
                {showClick && (
                    <img
                        src='./resources/click.png' 
                        alt='click' 
                        height='20rem'
                        className="project"
                    />
                )}
            </Name>
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

    :hover .project {
        transform: scale(1.1);
    }

    @media screen and (max-width: 600px) {
        padding: .5rem 1rem;
    }
`
const Name = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;

    h4 {
        width: 95%;
        text-align: right;
        transition: transform 1s ease;

    }

    @media screen and (max-width: 600px) {
        
        h4 {
            font-size: 1.3rem;
        }
    }
    `
const Logo = styled.img`
    height: 3rem;
    width: 3rem;
    border: white solid 2px;
    border-radius: 100%;
    transition: transform 1s ease;
    
    @media screen and (max-width: 600px) {
        height: 2.5rem;
        width: 2.5rem;
    }

`