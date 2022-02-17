import styled from "styled-components";

const Name = () => {
    return (
        <Container>
            <Picture src="./resources/profilbw2.JPG" alt="profil" />
            <NameDiv>
                <h2> Antonia TCHAKOUNTE</h2>
                <h3> 29 ans, Toulouse </h3>
            </NameDiv>
        </Container>
    );
}

export default Name;

const Container = styled.div`
    display: flex;
    height: auto;
    margin: 2rem 0;
    flex-direction: row-reverse;
`
const Picture = styled.img`
    height: 10rem;
    border: white solid 5px;
    border-radius: 100%;
    background-color: white;
    margin: 0 2rem;
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;

    h2 {
        font-weight: bold;
        color: #7bdcb5;
    }
`