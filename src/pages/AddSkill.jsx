import { Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useContext } from "react";

import authContext from "../context/authContext";
import postSkill from '../data/postSkill';

import Page from '../styled-components/Page';
import styled from 'styled-components';
import Input from '../styled-components/Input';
import Submit from '../styled-components/Submit';
import RawButton from '../styled-components/RawButton';

const AddProject = () => {
    const { isConnected, setIsConnected } = useContext(authContext);
    const { register, handleSubmit } = useForm();

    const newSkill = (data) => {
        postSkill(data)
    };

    if (!isConnected) {
        return <Navigate to='/' />
    }

    return (
        <Page>
            <RawButton type='button' onClick={() => setIsConnected(false)} > Se déconnecter </RawButton>

            <Title> Créer une nouvelle compétence </Title>

            <FormContainer
                onSubmit={handleSubmit(newSkill)}
                enctype="multipart/form-data"
            >
                <Input
                    type="text"
                    name="name"
                    placeholder="Nom de la compétence"
                    { ...register("name", {required: true})}
                />
                <Submit type='submit'> <h4> Créer la compétence </h4> </Submit>
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