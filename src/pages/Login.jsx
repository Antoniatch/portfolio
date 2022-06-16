import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import authContext from "../context/authContext";
import Page from "../styled-components/Page";
import Input from "../styled-components/Input";
import Submit from "../styled-components/Submit";

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')

    const { isConnected, setIsConnected } = useContext(authContext)

    const login = () => {
        axios.post('http://localhost:5000/login', {
            user: user,
            password: password
        })
        .then((response) => {
            if(response.data.message) {
                console.log(response);
                setLoginStatus(response.data.message)
            } else {
                setIsConnected(true);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
            <Page>
                <LoginContainer>
                    <h1> Connexion </h1>
                    <Input 
                        type='text'
                        placeholder='Identifiant'
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Input 
                        type='password'
                        placeholder='Mot de passe'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Submit
                        type='button'
                        onClick={() => login()}
                    >
                        Se connecter
                    </Submit>

                    {isConnected 
                        ? <>
                            <Goto to='/new-project'> <h4> Ajouter un projet </h4> </Goto> 
                            <Goto to='/new-skill'> <h4> Ajouter une compétence </h4> </Goto> 
                            <Goto to='/new-project-skills'> <h4> Associer des compétences à un projet </h4> </Goto> 
                            <Goto to='/delete'> <h4> Supprimer des compétences ou projets </h4> </Goto> 
                        </>
                        : <h4> {loginStatus} </h4>
                    }

                </LoginContainer>
            </Page>
    );
}

export default Login;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: #7bdcb5 solid 3px;
    margin: 7% 20%;
    padding-top: 5%;

    h1 {
        margin-bottom: 2rem;
    }
`
const Goto=styled(Link)`
    text-decoration: none;
    color: white;
`