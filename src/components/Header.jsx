import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import MenuList from "./MenuList";

const Header = ({ projects }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [ logo, setLogo ] = useState("./resources/homepage.png");

    return (
        <Banner>
            <Logo 
                to='/'
                onMouseEnter={() => setLogo("./resources/homepageblack.png")}
                onMouseLeave={() => setLogo("./resources/homepage.png")}
            >
                <img src={logo} alt="profil" />
            </Logo>
            <MenuContainer>
                <Projects type='button' onClick={() => setShowMenu(!showMenu)}> 
                    <h3> Mes projets </h3> 
                </Projects>
                        <MenuList visible={showMenu}>
                            <ul>
                                {projects.map((project) =>
                                    <ToProject 
                                    to={`/${project.id}`} 
                                    key={project.id}
                                    onClick={() => setShowMenu(false)}
                                    >
                                        <li key={project.id}> {project.name} </li>
                                    </ToProject>
                                )}
                            </ul>
                        </MenuList>
            </MenuContainer>
        </Banner>
    );
}

const Banner = styled.div`
    display: flex;
    background-color: white;
    height: 5rem;
    color: black;
    align-items: center;
    padding: 0 5rem;
    position: sticky;
    top: 0;
    z-index: 10;
`

const Logo = styled(Link)`
    height: 70%;

    img {
        height: 100%;
    }
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
const Projects = styled.button`
    border: none;
    background-color: transparent;
    padding: 0 3rem;
    
    :hover {
        cursor: pointer;
        color: #7bdcb5;
    }

    h3 {
        font-family: 'Roboto Mono', monospace;
        font-weight: bold
    }
`
const ToProject = styled(Link)`
    text-decoration: none;
    color: white;
`

export default Header;