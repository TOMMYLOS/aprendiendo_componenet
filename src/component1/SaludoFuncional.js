import React from "react";

function Saludo(props) {
  return (
    <h2>
      Hola {props.nombre} {props.apellido} desde un componenete funcional
    </h2>
  );
}

export default Saludo;
