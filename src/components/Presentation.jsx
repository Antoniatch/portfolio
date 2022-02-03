import styled from "styled-components";

import Title from "../styled-components/Title";

const Presentation = () => {
    return (
        <Container>
            <Title> 
                <h3> Développeuse full-stack Junior  </h3>
            </Title>
            <TextContainer>
                <Text>
                    Bonjour, je m'appelle Antonia, je suis développeuse.
                </Text>
                <Subtitle> Parcours </Subtitle>
                <Text>
                    J'ai fait un Master pour devenir chargée d'études économiques et sociales.
                </Text>
                <Subtitle> Formation </Subtitle>
                <Text>
                    J'ai fait une formation de 5 mois à la Wild Code School.
                    Vous trouverez la présentation de ma formation <a href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web" target="_blank" rel="noopener noreferrer">ici</a>
                </Text>
            </TextContainer>
        </Container>
    );
}

export default Presentation;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
`
const TextContainer = styled.div`
    width: 90%;
    margin: 2rem auto;
`
const Subtitle = styled.h4`
    margin-top: 2rem;
`
const Text = styled.p`
    a {
        text-decoration: none;
        color: purple;
    }
`