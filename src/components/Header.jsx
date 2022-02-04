import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = ({ projects }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <Banner>
            <Logo to='/'>
                <img src="https://cdn-icons-png.flaticon.com/512/3442/3442450.png" alt="icon" />
            </Logo>
            <MenuContainer>
                <Projects type='button' onClick={() => setShowMenu(!showMenu)}> <h3> Mes projets </h3> </Projects>
                {!showMenu ? null :
                    <MenuList>
                        <ul>
                            {projects.map((project) =>
                                <ToProject to={`/${project.id}`} key={project.id} >
                                    <li> {project.name} </li>
                                </ToProject>
                            )}
                        </ul>
                    </MenuList>
                }
            </MenuContainer>
        </Banner>
    );
}

const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 5rem;
    color: black;
    align-items: center;
    padding: 0 5rem;
`

const Logo = styled(Link)`
    height: 80%;
    border-radius: 100%;
    border: yellow solid 2px;

    img {
        height: 100%;
        border-radius: 100%
    }
`
const MenuContainer = styled.div`
    position: relative;
`
const Projects = styled.button`
    border: none;
    background-color: transparent;
    
    :hover {
        cursor: pointer;
    }

    h3 {
        font-family: 'Courier New'
    }
`
const MenuList = styled.div`
    display: flex;
    position: absolute;
    right: 9rem;
    top: 6rem;
    color: white;
    font-size: 1.2rem;
    width: 100%;

    ul {
        list-style: none
    }

    li {
        padding: .5rem;
        width: 200%;
        text-align: right;
    }
`
const ToProject = styled(Link)`
    text-decoration: none;
    color: white;
`

export default Header;