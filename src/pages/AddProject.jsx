import { Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useContext } from "react";

import authContext from "../context/authContext";
import postProject from '../data/postProject';

import Page from '../styled-components/Page';
import styled from 'styled-components';
import Input from '../styled-components/Input';
import DescriptionInput from '../styled-components/DescriptionInput';
import Submit from '../styled-components/Submit';
import RawButton from '../styled-components/RawButton';

const AddProject = () => {
    const { isConnected, setIsConnected } = useContext(authContext);
    const { register, handleSubmit } = useForm();

    const newProject = (data) => {
        const screenshot_1 = document.getElementById('screenshot_1').value;
        const screenshot_2 = document.getElementById('screenshot_2').value;

        postProject(data, screenshot_1, screenshot_2)
    };

    if (!isConnected) {
        return <Navigate to='/' />
    }

    return (
        <Page>
            <RawButton type='button' onClick={() => setIsConnected(false)} > Se déconnecter </RawButton>

            <Title> Créer un nouveau projet </Title>

            <FormContainer
                onSubmit={handleSubmit(newProject)}
                enctype="multipart/form-data"
            >
                <Input
                    type="text"
                    name="name"
                    placeholder="Nom du projet"
                    { ...register("name", {required: true})}
                />
                <DescriptionInput 
                    name="description"
                    placeholder='Description du projet'
                    { ...register("description", {required: true})}
                />
                <Input
                    type="text"
                    name="link"
                    placeholder="Lien"
                    { ...register("link", {required: true})}
                />
                <Input
                    type="text"
                    name="logo"
                    placeholder="Logo"
                    { ...register("logo", {required: true})}
                />
                <Input
                    id="screenshot_1"
                    type="text"
                    name="screenshot_1"
                    placeholder="Screenshot"
                    // { ...register("screenshot_1", {required: true})}
                />
                <Input
                    id="screenshot_2"
                    type="text"
                    name="screenshot_2"
                    placeholder="Screenshot"
                    // { ...register("screenshot_2", {required: true})}
                />

                <Submit type='submit'> <h4> Créer le projet </h4> </Submit>
            </FormContainer>
        </Page>
    );
}

export default AddProject;

const Title = styled.h1`
    text-align: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
`