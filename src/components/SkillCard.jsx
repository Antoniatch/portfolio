import { useState } from "react";
import styled from "styled-components";

const SkillCard = ({skill}) => {
    const [ showClick, setShowClick ] = useState(false);

    return (
        <Container
            onMouseEnter={() => setShowClick(true)}
            onMouseLeave={() => setShowClick(false)}
        >
            <h4 className="skill"> {skill.name} </h4>
            {showClick && (
                <img
                src='./resources/click.png'
                alt='click'
                height='20rem'
                className="skill"
                />
            )}
        </Container>
    );
}

export default SkillCard;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    align-items: center;

    h4 {
        padding: .5rem 0;
        text-align: justify;
        font-size: 1.5rem;
        font-weight: 100;
        margin: 0;
        font-family: 'Roboto Mono', monospace;
        width: 80%;
        transition: transform 1s ease;
    }

    img {
        margin: 0 1rem
        transition: transform 1s ease;
    }

    :hover .skill {
        transform: scale(1.1)
    }
`