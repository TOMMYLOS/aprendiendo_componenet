import React from "react";

function Welcome(props) {
  const [nombre] = React.useState("Cathia");
  const [apellido] = React.useState("Osa Mayor");
  const [datos] = React.useState({
    correo: "osita@gmail.com",
    edad: 19
  });

  const nombreCompleto = () => props.nombre + " " + props.apellido;

  const datosCompletos = () => datos.correo + " y " + datos.edad;

  return (
    <div>
      <h1>
        Hola amigos, me llamo {nombre} {apellido}
      </h1>
      <h2>Mi hermana se llama {nombreCompleto()}</h2>
      <h2>
        En la actualidad mi correo y edad es {datosCompletos()} años
        respectivamente.
      </h2>
    </div>
  );
}

export default Welcome;
