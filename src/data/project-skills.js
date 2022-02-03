import axios from "../helper/axios-config";

const getProjectSkills = (setVar) => {
  axios
    .get('http://localhost:5000/skill-projects')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err))
};

export default getProjectSkills;