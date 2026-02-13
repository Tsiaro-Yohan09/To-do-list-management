import { useState } from "react";
import api from "./api";
import axios from "axios"


function App() {
  const [task, setTask] = useState([]);

  
  const getTask = async () => {
    try {
      const res = await api.get("task/");
      setTask(res.data);
      console.log("DATa:");
      console.log(res.data);
    } catch (error) {
      console.error("Erreur chargement TASK :", error);
    }
  };
  /*async function getTask() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/task/");
    setTask(response);
    console.log("Antayyyyyyy");
    
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  }*/
  console.log("Yohan:");
  console.log(task)
  

  return (
    <>
      <button onClick={getTask}>
        Charger les tâches
      </button>
      <h1>Eto fotsiny aloha ohh</h1>
    </>
  );
}

export default App;
