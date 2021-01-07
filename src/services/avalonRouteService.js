import axios from "axios";

const listAllRoutes = () => {
    return axios.get("https://avalon-33de4-default-rtdb.firebaseio.com/avalonRoutes.json");
}

const addRoute = (route) => {
    return axios.post("https://avalon-33de4-default-rtdb.firebaseio.com/avalonRoutes.json", route);
}

const methods = {
    listAllRoutes,
    addRoute
}

export default methods