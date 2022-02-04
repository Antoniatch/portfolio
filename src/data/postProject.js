import axios from "../helper/axios-config";

const postProject = async (data, screen1, screen2 ) => {
    axios
        .post("http://localhost:5000/projects", {
          ...data,
          screenshots: [
              screen1,
              screen2
          ]
        })
        .then(() => {
          alert("Maison ajoutée !");
        })
        .catch((err) => {
          console.log(err);
        });
};

export default postProject;