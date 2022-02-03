import { Link } from 'react-router-dom';
import styled from "styled-components";

const Footer = () => {
    return (
        <Banner>
            <InvisibleLink to='/login'> XXX </InvisibleLink>
            <a href="https://www.linkedin.com/in/antoniatchakounte" target="_blank" rel="noopener noreferrer">
                <img src="../resources/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Antoniatch" target="_blank" rel="noopener noreferrer">
                <img src="../resources/github.png" alt="Github" />
            </a>
            <a href="mailto: antoniatch@zohomail.eu">
                <img src="../resources/new-email-envelope.png" alt="Email" />
            </a>
            <a href="tel:+336-25-85-41-57">
                <img src="../resources/smartphone.png" alt="Phone" />
            </a>
            <InvisibleLink to='/login'> XXX </InvisibleLink>
        </Banner>
    );
}

export default Footer;

const Banner = styled.div`
    display: flex;
    background-color: white;
    height: 3rem;
    color: black;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;

    a {
        height: 60%;
        margin: 0 1rem
    }

    img {
        height: 100%
    }
`
const InvisibleLink = styled(Link)`
    color: white;
    text-decoration: none;
`