import {useState} from 'react';

const UseState03 = () => {
  const [mensaje, setMensaje] = useState("Hacer Click")
  const [mensajeAlternativo, setMensajeAlternativo] = useState(true)
  const [cambiarFondo, setCambiarFondo] = useState("green")

  const alternarMensaje = () => {
    setMensajeAlternativo(!mensajeAlternativo)
    setMensaje(mensajeAlternativo ? 'hola' : 'adios')
    setCambiarFondo(cambiarFondo ===  "green" ? 'blue' : 'green')
  }
  return (
    <div style={{backgroundColor: cambiarFondo}}>
      <button onClick={alternarMensaje}>{mensaje}</button>
    </div>
  );
};

export  {UseState03}