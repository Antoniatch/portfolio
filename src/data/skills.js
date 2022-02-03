import axios from "../helper/axios-config";

const getSkills = (setVar) => {
  axios
    .get('http://localhost:5000/skills')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err))
};

export default getSkills;