import styled from "styled-components";

const GoToSite = ({ link }) => {
    return (
        <Container>
            <img src="../resources/arrow-right.png" alt="arrow" height="90%" className="link"/>
            <Link href={link} target='_blank' rel="noopener noreferrer"> 
                <h4 className='link'> Accéder au site </h4> 
            </Link>
        </Container>

    );
}

export default GoToSite;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 3rem;
    align-items: center;
    margin: 1rem;
    cursor: pointer;

    h4 {
        transition: transform 1s ease;
    }

    img {
        transition: transform 1s ease;
    }

    :hover .link {
        transform: scale(1.1)
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #7bdcb5;
    padding: 1rem;
`