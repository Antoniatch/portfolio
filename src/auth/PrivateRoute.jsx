import { useContext } from "react/cjs/react.development";
import authContext from "../context/authContext";
import AddProject from "../pages/AddProject";
import Login from "../pages/Login";

const PrivateRoute = () => {
    const { isConnected } = useContext(authContext);

    return isConnected ? <AddProject /> : <Login />
}

export default PrivateRoute;