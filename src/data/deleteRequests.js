import axios from "../helper/axios-config";

const deleteSkill = async (id) => {
    axios
    .delete(`http://localhost:5000/skills/${id}`)
    .then(() => {
        alert("Compétence supprimée avec succès");
    })
    .catch((err) => {
        console.log(err);
    });
}

const deleteProject = async (id) => {
    axios
        .delete(`http://localhost:5000/projects/${id}`)
        .then(() => {
            alert("Projet supprimé avec succès")
        })
        .catch((err) => {
            console.log(err);
        })
}

export { deleteSkill, deleteProject };