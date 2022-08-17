import React, { useState } from "react";

function Welcome() {
  const [contador, setContador] = useState(0);

  const sumaClick = () => setContador(contador + 1);
  const restaClick = () => {
    return setContador((cambiar) => cambiar - 1);
  };

  return (
    <div>
      <h1>Hello Contador</h1>
      <div>
        <button onClick={sumaClick}>+</button>
        <button onClick={restaClick}>-</button>
      </div>
      <div>Ahora voy {contador}</div>
    </div>
  );
}

export default Welcome;
