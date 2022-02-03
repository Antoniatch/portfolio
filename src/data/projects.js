import axios from "../helper/axios-config";

const getProjects = (setVar) => {
  axios
    .get('http://localhost:5000/projects')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err))
};

export default getProjects;