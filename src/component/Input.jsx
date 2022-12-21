import React from "react";

const Input = ({nombre, setNombre, password, setPassword}) => {
  return (
    <div>
      <label htmlFor="nombre"><strong>Nombre</strong></label>
      <br></br>
      <input
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
        id="nombre"
        value={nombre}
        onChange= {(e) => setNombre(e.target.value)}
      />
      <br></br>
      <br></br>
      <label htmlFor="password" className="contrasena"><strong>Contraseña</strong></label>
      <br></br>
      <input
        type="password"
        className="form-control"
        placeholder="Ingrese su contraseña"
        id="password"
        value={password}
        onChange ={(e) => {setPassword(e.target.value)}}
      />
    </div>
  );
};

export default Input;
