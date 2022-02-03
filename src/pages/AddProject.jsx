import { Navigate } from 'react-router-dom';

import { useContext } from "react/cjs/react.development";
import authContext from "../context/authContext";

const AddProject = () => {
    const { isConnected, setIsConnected } = useContext(authContext);

    if (!isConnected) {
        return <Navigate to='/login' />
    }


    return (
        <>
            New project
            <button type='button' onClick={() => setIsConnected(false)} > Se déconnecter </button>
        </>
    );
}

export default AddProject;