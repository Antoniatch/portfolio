import styled from "styled-components";

import Timeline from "../components/Timeline";
import Container from "../styled-components/Container";
import Title from "../styled-components/Title";
import CV from '../data/CV.pdf'

const Presentation = () => {
    return (
        <Container>
            <Title> 
                <h3> Je me présente ...  </h3>
            </Title>
            <Timeline/>

            <Title> 
                <h3> Plus sérieusement ...  </h3>
            </Title>
            <TextContainer>
                <Text>
                    Vous trouverez mon CV <a href={CV} target="_blank" rel="noopener noreferrer">ici</a>
                </Text>
                <Text>
                    Pour en savoir plus sur ma formation à la Wild Code School, c'est par <a href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web" target="_blank" rel="noopener noreferrer">ici</a>
                </Text>
            </TextContainer>
        </Container>
    );
}

export default Presentation;

const TextContainer = styled.div`
    width: 90%;
    margin: 2rem auto;
`
//const Subtitle = styled.h4`
//    margin-top: 2rem;
//`

const Text = styled.p`
    a {
        text-decoration: none;
        color: #7bdcb5;
    }
`