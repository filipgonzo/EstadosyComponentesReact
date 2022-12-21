import React, {useState} from "react";
import Input from "./component/Input.jsx";
import Boton from "./component/boton.jsx";

function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const Botonform = () => {
    if(password==='252525'){
      return <Boton/>
    }else{
      return <></>
    }
  }
  return (
    <div className="App">
      <h1>Desafios de Estados y Componentes.</h1>
      <Input 
      //props para nombre
      nombre={nombre} 
      setNombre={setNombre}
      //props para password
      password={password}
      setPassword ={setPassword}
      ></Input>
      <Botonform></Botonform>
      
    </div>
  );
}

export default App;
