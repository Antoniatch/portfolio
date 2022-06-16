import axios from "../helper/axios-config";

const postProjectSkills = async (data) => {
    axios
        .post("http://localhost:5000/skill-projects", data)
        .then(() => {
          alert("Compétence(s) ajoutée(s) avec succès au projet");
        })
        .catch((err) => {
          console.log(err);
        });
};

export default postProjectSkills;
