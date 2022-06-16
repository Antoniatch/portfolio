import { Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useContext, useEffect, useState } from "react";

import authContext from "../context/authContext";
// import getProjectSkills from '../data/project-skills';
import getProjects from '../data/projects';
import getSkills from '../data/skills';
import { deleteSkill, deleteProject } from '../data/deleteRequests';

import CheckboxContainer from '../components/CheckboxContainer';

import Page from '../styled-components/Page';
import styled from 'styled-components';
import Submit from '../styled-components/Submit';
import RawButton from '../styled-components/RawButton';

const AddProject = () => {
    const { isConnected, setIsConnected } = useContext(authContext);
    const { register, handleSubmit, formState } = useForm({ mode: 'onChange'});
    const { isSubmitting } = formState

    const [ projects, setProjects ] = useState([]);
    const [ skills, setSkills ] = useState([]);

    useEffect(() => {
        getProjects(setProjects);
        getSkills(setSkills)
    }, []);
    
    const deleteItems = (data) => {
        const deletedProject = data.project_id;
        const deletedSkill = data.skill_id;

        if (deletedProject) {
            deleteProject(parseInt(deletedProject))
        }

        if (deletedSkill) {
            deleteSkill(parseInt(deletedSkill))
        }
    };

    if (!isConnected) {
        return <Navigate to='/' />
    }

    return (
        <Page>
            <RawButton type='button' onClick={() => setIsConnected(false)} > Se déconnecter </RawButton>

            <Title> Supprimer une compétence ou projet </Title>

            <FormContainer
                onSubmit={handleSubmit(deleteItems)}
                enctype="multipart/form-data"
            >
                <Section>
                    <h3>Supprimer un projet</h3>

                    {projects.map(project => (
                        <CheckboxContainer>
                            <input
                                type="radio"
                                key={project.id}
                                id={project.name}
                                name="project"
                                value={project.id}
                                { ...register("project_id", {required: true})}
                                />
                            <label htmlFor={project.name}>
                                {project.name}
                            </label>
                        </CheckboxContainer>
                    ))}
                </Section>

                <Section>
                    <h3>Supprimer une compétence</h3>

                    {skills
                        .map(skill => 
                            <CheckboxContainer>
                                <input
                                    type="radio"
                                    key={skill.id}
                                    id={skill.name}
                                    name='skills'
                                    value={skill.id}
                                    { ...register("skill_id")}
                                    />
                                <label htmlFor={skill.name}>
                                    {skill.name}
                                </label>
                            </CheckboxContainer>                
                        )
                    }
                </Section>

                <Submit type='submit' disabled={isSubmitting}> <h4> Supprimer </h4> </Submit>
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

const Section = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    margin: 1rem;

    h3 {
        margin : 1rem 0;
        padding: .5rem 0;
        border-bottom: solid #7bdcb5 2px
    }
`