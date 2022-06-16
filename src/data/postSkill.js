import axios from "../helper/axios-config";

const postSkill = async (data) => {
    axios
        .post("http://localhost:5000/skills", data)
        .then(() => {
          alert("Nouvelle compétence ajoutée avec succès");
        })
        .catch((err) => {
          console.log(err);
        });
};

export default postSkill;