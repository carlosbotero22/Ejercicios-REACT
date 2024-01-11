import {useState} from 'react';

const UseState04 = () => {
  const [textoBoton, setTextoBoton] = useState("Hacer CLick")

  const cambiarTexto = () => {
    setTextoBoton(textoBoton === 'Hacer Click' ? 'Click Hecho' : 'Hacer Click')
  }
  
  return (
    <div>
      <button onClick={cambiarTexto}>{textoBoton}</button>
    </div>
  );
};

export  {UseState04}