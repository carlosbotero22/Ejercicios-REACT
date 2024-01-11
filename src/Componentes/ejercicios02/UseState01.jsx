import {useState} from 'react';

const UseState01 = () => {
  const [textBoton, setTextBoton] = useState("Hacer Click")

  const cambiarTexto = () => {
    setTextBoton("Hiciste Click...")
  }
  return (
    <div>
      <button onClick={cambiarTexto}>{textBoton}</button>
    </div>
  );
};

export  {UseState01}