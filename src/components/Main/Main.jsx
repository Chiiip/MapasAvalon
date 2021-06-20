import React, { useState, useEffect } from "react";
import MapsTable from "../MapsTable/MapsTable";
import avalonMapService from "../../services/avalonMapService";

const Main = () => {
  const [firebaseData, setFirebaseData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    avalonMapService.listAllMaps(setFirebaseData);
  }, []);

  const handleTextChange = event => {
    setText(event.target.value);
    setFilter("");
  }

  return (
    <div>
      <div><input type="text" value={text} onChange={handleTextChange}></input></div>
      <div>
        <MapsTable list={firebaseData} filter={filter} text={text} />
      </div>
    </div>
  );
};

export default Main;
