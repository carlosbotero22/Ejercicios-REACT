import {useState} from 'react';

const UseState02 = () => {
  
  const [mensaje, setMensaje] = useState("hacer click")
  const [mensajeAlternativo, setMensajeAlternativo] = useState(true)

  const alternarMensaje = () => {
    setMensajeAlternativo(!mensajeAlternativo)
    setMensaje(mensajeAlternativo ? 'Hola' : 'Adios')
  }
  return (
    <div>
      <button onClick={alternarMensaje}>{mensaje}</button>
    </div>
  );
};

export  {UseState02}