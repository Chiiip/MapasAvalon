import axios from "axios";

const listAllMaps = callback => {
    const mapData = localStorage.getItem("routes");
    if (mapData) {
        callback(JSON.parse(mapData));
    } else {
        axios.get("https://avalonmaps-849e6-default-rtdb.firebaseio.com/data.json").then((data) => {
        const values = Object.values(data.data);
        callback(values);
        localStorage.setItem("routes", JSON.stringify(values));
    });
    }
    
}

const methods = {
    listAllMaps,
}

export default methods