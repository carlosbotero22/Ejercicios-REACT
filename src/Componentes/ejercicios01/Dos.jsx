import React from 'react';

const Dos = () => {

  function enviarMensaje() {
    console.log('Mensaje enviado.....')
  }

  return (
    <div>
      <h1>segundo</h1>
      <button onClick={enviarMensaje}>Enviar Mensaje</button>
    </div>
  );
};

export default Dos;