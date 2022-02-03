import Title from "../styled-components/Title";
import HomeCard from "../styled-components/HomeCard";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = ({ projects }) => {
    return (
        <HomeCard>
            <Title>
                <h3> Mes projets </h3>
            </Title>
            {projects.map((project) => <ProjectCard project={project} key={project.id} />)} 
        </HomeCard>
    );
}

export default ProjectsContainer;